import React, { FC, useEffect, useState } from "react"

import * as SC from "./styles"
import { IArticle } from "../../types"
import articlesApi from "../../api/articles"
import SilhouetteLayout from "../../layouts/SilhouetteLayout"

interface IArticlePageProps {
  route: {
    params: {
      articleId: string
    }
  }
}

const ArticlePage: FC<IArticlePageProps> = ({ route }) => {
  const { articleId } = route.params
  const [article, setArticle] = useState<IArticle>()

  const loadArticle = async () => {
    const response = await articlesApi.getArticle(articleId)

    if (response.ok && response?.data) {
      setArticle(response.data)
    }
  }

  useEffect(() => {
    loadArticle()
  }, [])

  if (!article) return null

  return (
    <SC.ArticlePageLayout title="Article" color="background" header>
      <SC.ContentWrapper>
        <SC.Title>{article.name}</SC.Title>
        <SC.Content>{article.content}</SC.Content>
      </SC.ContentWrapper>
    </SC.ArticlePageLayout>
  )
}

export default ArticlePage
