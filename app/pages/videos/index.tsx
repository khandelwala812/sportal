import React, { FC, useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import Toast from "react-native-toast-message"

import * as SC from "./styles"
import useAuth from "../../hooks/useAuth"
import videosApi from "../../api/videos"
import Text from "../../components/Text"
import Button from "../../components/Button"
import { Video, AVPlaybackStatus } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker'
import axios from 'axios'

const pickImage = async () => {
  try {
    // No permissions request is necessary for launching the image library
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result, result.uri, result.file.name);

    const response = await videosApi.getVideoUrl()
    console.log(response, response.data.url, response.data);

    const config = {
      onUploadProgress: progressEvent => console.log(progressEvent.loaded),
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }   
    await axios.put(response.data.url, result.file, config) 
  }
  catch(err)
  {
    console.log("error: ", err);
  }
}

const VideosPage: FC = () => {
  const { user } = useAuth()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {

    const response = await videosApi.getVideos()

    if (response.ok && response?.data) {
      setVideos(response.data)
    }
  }  

  return (
    <SC.EventsPageLayout title="Videos" color="background">
      <FlatList
        data={videos}
        keyExtractor={(_, i) => `#${i}`}
        ListHeaderComponent={
        <View style={{marginLeft: 22, width: 500, justifyContent: "space-between", flexDirection: "row"}}>
          <SC.Title>Videos</SC.Title>
          {/* <input type="file" onChange={(e) => upload(e)}></input> */}
          <Button color="light" textStyle={{color: 'white'}} onPress={() => pickImage()}>Upload Video</Button>
        </View>}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <SC.EventWrapper>
              <SC.ContentWrapper>
                <Video
                  style={{alignSelf: 'center', width: 320, height: 200}}
                  source={{
                    uri: item.videoUrl,
                  }}
                  useNativeControls
                  resizeMode="contain"
                  // isLooping
                  // onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
              </SC.ContentWrapper>
              <View style={{alignSelf:'left'}}>
                <Text>{item.title}</Text>
              </View>
            </SC.EventWrapper>
          )
        }}
      />
    </SC.EventsPageLayout>
  )
}

export default VideosPage
