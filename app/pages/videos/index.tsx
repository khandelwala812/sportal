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
import fetchProgress from 'fetch-progress'
import axios from 'axios'

// import { RNS3 } from 'react-native-s3-upload';
// import S3FileUpload from 'react-s3';

// const file = {
//   // `uri` can also be a file system path (i.e. file://)
//   uri: "file://c:/temp/img.png",
//   name: "image2.png",
//   type: "image/png"
// }

import AWS from 'aws-sdk'

const S3_BUCKET ='uwse-images';
const REGION ='us-east-1';

AWS.config.update({
    accessKeyId: 'AKIAWNNENEZ5ZHGALEO3',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET},
  region: REGION,
})

const pickImage = async () => {
  try {
    // No permissions request is necessary for launching the image library
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result, result.uri, result.file.name);

    const response = await videosApi.getVideoUrl()
    console.log(response, response.data.url, response.data);

    // let data = new FormData();
    // data.append('image', result.file);
    
    // let request = new XMLHttpRequest();
    // request.open('PUT', response.data.url); 
    
    // // upload progress event
    // request.upload.addEventListener('progress', function(e) {
    //   // upload progress as percentage
    //   let percent_completed = (e.loaded / e.total)*100;
    //   console.log(percent_completed);
    // });
    
    // // request finished event
    // request.addEventListener('load', function(e) {
    //   // HTTP status message (200, 404 etc)
    //   console.log(request.status);
    
    //   // request.response holds response from the server
    //   console.log(request.response);
    // });
    
    // // send POST request to server
    // request.send(result.file);    
    const config = {
      onUploadProgress: progressEvent => console.log(progressEvent.loaded),
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }   
    const formData = new FormData();
    formData.append('file',result.file)
    await axios.put(response.data.url, result.file, config) 
    // const {uri} = await response.json()
    // fetch(response.data.url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   body: result.file
    // }).then(
    //   fetchProgress({
    //     // implement onProgress method
    //     onProgress(progress) {
    //       console.log({ progress });
          // A possible progress report you will get
          // {
          //    total: 3333,
          //    transferred: 3333,
          //    speed: 3333,
          //    eta: 33,
          //    percentage: 33
          //    remaining: 3333,
          // }

    // const params = {
    //   ACL: 'public-read',
    //   Body: result.file,
    //   Bucket: S3_BUCKET,
    //   Key: "images/" + result.file.name
    // };

    // myBucket.putObject(params, function(err, data) {
    //   if (err) console.log("Error: ", err, err.stack); // an error occurred
    //   else     console.log("Success: ", data);           // successful response
    // })
    //   .on('httpUploadProgress', (evt) => {
    //       console.log(evt);
          
    //   })
    //   .send((err) => {
    //       if (err) console.log(err)
    //   })    
    // file.uri = result.uri
    // file.name = result.file.name
    // const response = await RNS3.put(file, options)
    // const response = await S3FileUpload.uploadFile(result.file, config)
    // console.log(response) 
  }
  catch(err)
  {
    console.log("error: ", err);
    
  }
}

const options = {
  keyPrefix: "images/",
  bucket: "uwse-images",
  region: "us-east-1",
  accessKey: "AKIAWNNENEZ5ZHGALEO3",
  secretKey: "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",
  successActionStatus: 201
}

const config = {
  bucketName: "uwse-images",
  dirName: "images",
  region:"us-east-1",
  accessKeyId: "AKIAWNNENEZ5ZHGALEO3",
  secretAccessKey: "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"
}

// const upload = async (e) => {
//   try {
//     console.log("target: ", e.target);
    
//     // No permissions request is necessary for launching the image library
//     const response = await RNS3.upload(e.target.files[0], config)
//     console.log(response)
//   }
//   catch(err)
//   {
//     console.log("error: ", err)
//   }
// }

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
