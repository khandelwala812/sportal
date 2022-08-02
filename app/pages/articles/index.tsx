import React, { useEffect, useState } from "react"
import { FlatList } from "react-native"

import * as SC from "./styles"
import { IArticle } from "../../types"
import articlesApi from "../../api/articles"
import ArticleCard from "../../components/ArticleCard"
import SilhouetteLayout from "../../layouts/SilhouetteLayout"
import Header from "../../components/Header"

const ArticlesPage = () => {
  const [articles, setArticles] = useState<IArticle[]>([])

  const loadArticles = async () => {
    const response = await articlesApi.getArticles()

    if (response.ok && response?.data) {
      setArticles(response.data)
    }
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <SC.ArticlesPageLayout
      title="Enhancement Articles"
      color="background"
      header
    >
      <FlatList
        data={articles}
        keyExtractor={article => article._id}
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<SC.Title>Enhancement Articles</SC.Title>}
        renderItem={({ item }) => {
          const article = item as IArticle
          return <ArticleCard article={article} />
        }}
      />
    </SC.ArticlesPageLayout>
  )
}

export default ArticlesPage
