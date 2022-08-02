import { IUser, IVideo } from "../types"
import client from "./client"

const route = "/videos"

const getVideos = () => {
  return client.get<IVideo[]>(`${route}`)
}

const findVideoById = (videoId: string) => {
  return client.get<IVideo>(`${route}/find-by-id?videoId=${videoId}`)
}

interface IS3URLResponse {
  url: string
}

const getVideoUrl = () => {
  return client.get<IS3URLResponse>(`${route}/S3Url`)
}

const uploadVideo = (user: IUser | null, title: string, s3Url: string) => {
  return client.post(`${route}/upload-video`, {
    user,
    title,
    s3Url
  })
}

const approveVideo = (
  videoId: string,
  isApproved: boolean,
  userEmail: string
) => {
  return client.put(`${route}/approve-video`, {
    videoId,
    isApproved,
    userEmail
  })
}

export default {
  getVideos,
  findVideoById,
  getVideoUrl,
  uploadVideo,
  approveVideo
}
