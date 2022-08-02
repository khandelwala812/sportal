import { IArticle } from "../types"
import client from "./client"

const route = "/articles"

const getArticles = () => {
  return client.get<IArticle[]>(route)
}

const getArticle = (articleId: string) => {
  return client.get<IArticle>(`${route}/search?articleId=${articleId}`)
}

export default {
  getArticles,
  getArticle
}
