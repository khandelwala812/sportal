import { IVideo } from "../types"
import client from "./client"

const route = "/videos"

const getVideos = () => {
  return client.get<IVideo[]>(`${route}`)
}

interface IS3URLResponse {
  url: string
}

const getVideoUrl = () => {
  return client.get<IS3URLResponse>(`${route}/S3Url`)
}

const uploadVideo = (title: string, s3Url: string) => {
  return client.post(`${route}/upload-video`, {
    data: { title, s3Url }
  })
}

export default {
  getVideos,
  getVideoUrl,
  uploadVideo
}
