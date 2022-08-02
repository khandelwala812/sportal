import React, { FC, useEffect, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Video } from "expo-av"
import * as DocumentPicker from "expo-document-picker"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Bar } from "react-native-progress"

import * as SC from "./styles"
import { IVideo, TFormikSetValue } from "../../types"
import useModal from "../../hooks/useModal"
import videosApi from "../../api/videos"
import colors from "../../config/colors"
import modals from "../../config/modals"
import Button from "../../components/Button"
import ModalLayout from "../../layouts/ModalLayout"
import Text from "../../components/Text"
import useAuth from "../../hooks/useAuth"

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
  const { user } = useAuth()
  const [videos, setVideos] = useState<IVideo[]>([])
  const [progressLoaded, setProgressLoaded] = useState<number>(0)
  const [uploading, setUploading] = useState(false)
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

  const pickVideo = async (setFieldValue: TFormikSetValue) => {
    const result: IDocument = await DocumentPicker.getDocumentAsync({
      type: "video/*"
    })
    setFieldValue("video", result)
  }

  const handleSubmit = async ({ title, video }: IUploadVideoFormValues) => {
    setUploading(true)

    try {
      const response = await videosApi.getVideoUrl()

      if (response.ok && response?.data && video) {
        await axios.put(response.data.url, video.file, {
          onUploadProgress: progressEvent => {
            const rawPercent =
              (progressEvent.loaded / progressEvent.total) * 100
            setProgressLoaded(Math.round(rawPercent))
          },
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        await videosApi.uploadVideo(user, title, response.data.url)
        toggleModal(modals.UPLOAD_VIDEO)
        toggleModal(modals.UPLOAD_CONFIRMATION)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleInteraction =
    (videoId: string, type: "LIKE" | "DISLIKE") => () => {
      setVideos(
        videos.map((video: IVideo) => {
          if (video._id === videoId)
            if (type === "LIKE") {
              return {
                ...video,
                likes: video.isLiked ? video.likes - 1 : video.likes + 1,
                isLiked: !video.isLiked,
                dislikes: video.isDisliked
                  ? video.dislikes - 1
                  : video.dislikes,
                isDisliked: false
              }
            } else {
              return {
                ...video,
                dislikes: video.isDisliked
                  ? video.dislikes - 1
                  : video.dislikes + 1,
                isDisliked: !video.isDisliked,
                likes: video.isLiked ? video.likes - 1 : video.likes,
                isLiked: false
              }
            }

          return video
        })
      )
    }

  const handleView = (videoId: string) => () => {
    setVideos(
      videos.map((video: IVideo) => {
        if (video._id === videoId && !video.isViewed) {
          return {
            ...video,
            views: video.views + 1,
            isViewed: true
          }
        }

        return video
      })
    )
  }

  return (
    <SC.VideosPageLayout title="Daily Highlights" color="background" header>
      <FlatList
        data={videos}
        keyExtractor={(_, i) => `#${i}`}
        contentContainerStyle={{ alignItems: "center" }}
        ListHeaderComponent={
          <View
            style={{
              marginLeft: 22,
              width: 500,
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <SC.Title>Daily Highlights</SC.Title>
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
                    <SC.UploadWrapper>
                      <SC.SelectVideoButton
                        title="Browse"
                        color="medium"
                        onPress={() => pickVideo(setFieldValue)}
                      />
                      <Text numberOfLines={1}>{values.video?.file.name}</Text>
                    </SC.UploadWrapper>
                    <SC.Row>
                      <SC.UploadButton
                        title="Upload"
                        color={uploading ? "light" : "link"}
                        disabled={uploading}
                      />
                      {/* {progressLoaded > 0 && <Text>{progressLoaded}%</Text>} */}
                      {progressLoaded > 0 && (
                        <SC.Row>
                          <Bar progress={progressLoaded / 100} width={200} />
                          <SC.ProgressText>{progressLoaded}%</SC.ProgressText>
                        </SC.Row>
                      )}
                    </SC.Row>
                    <SC.Cross
                      onPress={() => toggleModal(modals.UPLOAD_VIDEO)}
                    />
                  </SC.UploadVideoWrapper>
                )}
              </Formik>
            </ModalLayout>
            <ModalLayout name={modals.UPLOAD_CONFIRMATION}>
              <SC.UploadVideoWrapper color="foreground">
                <SC.EventTitle>Submitted!</SC.EventTitle>
                <SC.Cross
                  onPress={() => toggleModal(modals.UPLOAD_CONFIRMATION)}
                />
                <Text>
                  Your video has been submitted to the Sportal team. Please
                  await our comments.
                </Text>
              </SC.UploadVideoWrapper>
            </ModalLayout>
          </View>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SC.EventWrapper>
            <Text>{item.title}</Text>
            <SC.ContentWrapper>
              <TouchableOpacity onPress={handleView(item._id)}>
                <Video
                  style={{ marginBottom: 4 }}
                  source={{
                    uri: item.videoUrl
                  }}
                  useNativeControls
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <SC.InteractionsWrapper>
                <SC.LikesWrapper>
                  <SC.Row>
                    <TouchableOpacity
                      onPress={handleInteraction(item._id, "LIKE")}
                    >
                      <MaterialCommunityIcons
                        name="thumb-up"
                        size={20}
                        color={item.isLiked ? colors.link : colors.medium}
                      />
                    </TouchableOpacity>
                    <SC.LikesText>{item.likes ?? 0}</SC.LikesText>
                  </SC.Row>
                  <SC.Row>
                    <TouchableOpacity
                      onPress={handleInteraction(item._id, "DISLIKE")}
                    >
                      <MaterialCommunityIcons
                        name="thumb-down"
                        size={20}
                        color={item.isDisliked ? colors.link : colors.medium}
                      />
                    </TouchableOpacity>
                    <SC.LikesText>{item.dislikes ?? 0}</SC.LikesText>
                  </SC.Row>
                </SC.LikesWrapper>
                <SC.ViewsWrapper>
                  <MaterialCommunityIcons
                    name="eye"
                    size={24}
                    color={colors.light}
                  />
                  <SC.ViewsText>{item.views ?? 0}</SC.ViewsText>
                </SC.ViewsWrapper>
              </SC.InteractionsWrapper>
            </SC.ContentWrapper>
          </SC.EventWrapper>
        )}
      />
    </SC.VideosPageLayout>
  )
}

export default VideosPage
