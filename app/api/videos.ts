import client from "./client"

const route = "/videos"

const getVideos = () => {
  return client.get(`${route}`)
}

const getVideoUrl = () => {
  return client.get(`${route}/S3Url`)
}

export default {
    getVideos,
    getVideoUrl
  }