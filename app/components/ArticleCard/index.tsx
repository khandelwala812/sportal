import React, { FC } from "react"

import * as SC from "./styles"
import { IArticle } from "../../types"
import colors from "../../config/colors"
import { useNavigation } from "@react-navigation/native"
import routes from "../../config/routes"

interface IArticleCardProps {
  article: IArticle
}

const ArticleCard: FC<IArticleCardProps> = ({ article }) => {
  const navigation = useNavigation()

  const navigateToArticle = () => {
    navigation.navigate(routes.READ_ARTICLE, { articleId: article._id })
  }

  return (
    <SC.CardWrapper onPress={navigateToArticle}>
      <SC.ContentWrapper>
        <SC.Title>{article.name}</SC.Title>
        <SC.DetailsWrapper>
          <SC.Subtitle>{article.publisher}</SC.Subtitle>
          <SC.Separator name="circle" size={5} color={colors.medium} />
          <SC.Subtitle>{article.date}</SC.Subtitle>
        </SC.DetailsWrapper>
        <SC.Subtext>{article.summary}</SC.Subtext>
      </SC.ContentWrapper>
      <SC.Thumbnail source={{ uri: article.image }} />
    </SC.CardWrapper>
  )
}

export default ArticleCard
