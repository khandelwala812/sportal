import React, { FC, useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { Video } from "expo-av"
import * as DocumentPicker from "expo-document-picker"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"

import * as SC from "./styles"
import { IVideo, TFormikSetValue } from "../../types"
import useModal from "../../hooks/useModal"
import videosApi from "../../api/videos"
import colors from "../../config/colors"
import modals from "../../config/modals"
import Button from "../../components/Button"
import ModalLayout from "../../layouts/ModalLayout"
import Text from "../../components/Text"

const initialValues: IUploadVideoFormValues = {
  title: "",
  video: null
}

interface IUploadVideoFormValues {
  title: string
  video: IDocument | null
}

interface IDocument {
  file: any
  uri: string
}

const VideosPage: FC = () => {
  const { toggleModal } = useModal()
  const [videos, setVideos] = useState<IVideo[]>([])
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Enter a title").label("Video Title"),
    video: Yup.object().required("Upload a video").label("Video")
  })

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    const response = await videosApi.getVideos()

    if (response.ok && response?.data) {
      setVideos(response.data)
    }
  }

  const pickVideo = async (
    values: IUploadVideoFormValues,
    setFieldValue: TFormikSetValue
  ) => {
    try {
      const result: IDocument = await DocumentPicker.getDocumentAsync({})
      setFieldValue("video", result)
      // const response = await videosApi.getVideoUrl()

      // if (response.ok && response?.data) {
      //   await axios.put(response.data.url, result.file, {
      //     onUploadProgress: progressEvent => console.log(progressEvent.loaded),
      //     headers: {
      //       "Content-Type": "multipart/form-data"
      //     }
      //   })
      //   await videosApi.uploadVideo(result)
      //   setFieldValue("video", result.uri)
      // }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = () => {}

  return (
    <SC.EventsPageLayout title="Videos" color="background">
      <FlatList
        data={videos}
        keyExtractor={(_, i) => `#${i}`}
        ListHeaderComponent={
          <View
            style={{
              marginLeft: 22,
              width: 500,
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <SC.Title>Videos</SC.Title>
            <Button
              color="light"
              textStyle={{ color: "white" }}
              onPress={() => toggleModal(modals.UPLOAD_VIDEO)}
            >
              Upload Video
            </Button>
            <ModalLayout name={modals.UPLOAD_VIDEO}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ values, setFieldValue }) => (
                  <SC.UploadVideoWrapper color="foreground">
                    <SC.EventTitle>Upload Video</SC.EventTitle>
                    <SC.TitleField name="title" placeholder="Video Title" />
                    <SC.SelectVideoButton
                      title="Browse"
                      color="medium"
                      onPress={() => pickVideo(values, setFieldValue)}
                    />
                    <>{values.video?.file.name}</>
                    <SC.Cross
                      onPress={() => toggleModal(modals.UPLOAD_VIDEO)}
                    />
                  </SC.UploadVideoWrapper>
                )}
              </Formik>
            </ModalLayout>
          </View>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SC.EventWrapper>
            <Text>{item.title}</Text>
            <SC.ContentWrapper>
              <Video
                style={{ width: 320 }}
                source={{
                  uri: item.videoUrl
                }}
                useNativeControls
                resizeMode="contain"
              />
              <SC.InteractionsWrapper>
                <SC.LikesWrapper>
                  <SC.Row>
                    <SC.Likes name="thumb-up" size={24} color={colors.medium} />
                    <SC.LikesText>100</SC.LikesText>
                  </SC.Row>
                  <SC.Row>
                    <SC.Dislikes name="thumb-down" size={24} color={colors.medium} />
                    <SC.LikesText>0</SC.LikesText>
                  </SC.Row>
                </SC.LikesWrapper>
                <SC.ViewsWrapper>
                  <SC.Views name="eye" size={24} color={colors.light} />
                  <SC.ViewsText>1000</SC.ViewsText>
                </SC.ViewsWrapper>
              </SC.InteractionsWrapper>
            </SC.ContentWrapper>
          </SC.EventWrapper>
        )}
      />
    </SC.EventsPageLayout>
  )
}

export default VideosPage
