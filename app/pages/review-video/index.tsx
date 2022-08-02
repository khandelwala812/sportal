import React, { FC, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import { IVideo } from "../../types"
import videosApi from "../../api/videos"
import routes from "../../config/routes"
import useAuth from "../../hooks/useAuth"

interface ReviewVideoPageProps {
  route: {
    params: {
      videoId: string
    }
  }
}

const ReviewVideoPage: FC<ReviewVideoPageProps> = ({ route }) => {
  const { videoId } = route.params
  const navigation = useNavigation()
  const { user } = useAuth()
  const [video, setVideo] = useState<IVideo | null>(null)
  const [time, setTime] = useState(1000)

  const loadVideo = async () => {
    const response = await videosApi.findVideoById(videoId)

    if (response.ok && response?.data) {
      setVideo(response.data)
    }
  }

  const updateVideoApproval = (approved: boolean) => async () => {
    if (!user) return

    const response = await videosApi.approveVideo(
      videoId,
      approved,
      user?.email
    )

    if (response.ok) {
      navigation.navigate(routes.OPENING)
    }
  }

  useEffect(() => {
    loadVideo()
  }, [])

  if (!video) {
    return null
  }

  return (
    <SC.ReviewVideoPageLayout title="Review Video" color="background" header>
      <SC.Title>Approve or Decline the Following Video</SC.Title>
      <SC.VideoToReview
        source={{ uri: video.videoUrl }}
        useNativeControls
        // resizeMode="contain"
        positionMillis={time}
      />
      <SC.ReviewWrapper>
        <SC.Heading>Timestamps</SC.Heading>
        <FlatList
          data={video.failedTimes}
          horizontal
          keyExtractor={(_, i) => `#${i}`}
          renderItem={({ item }) => {
            const time = item as number
            const seconds = time / 1000

            return <SC.Timestamp>0:0{seconds}</SC.Timestamp>
          }}
        />
        <SC.ButtonWrapper>
          <SC.DecisionButton
            title="Approve"
            color="link"
            onPress={updateVideoApproval(true)}
          />
          <SC.DecisionButton
            title="Reject"
            color="red"
            onPress={updateVideoApproval(false)}
          />
        </SC.ButtonWrapper>
      </SC.ReviewWrapper>
    </SC.ReviewVideoPageLayout>
  )
}

export default ReviewVideoPage
