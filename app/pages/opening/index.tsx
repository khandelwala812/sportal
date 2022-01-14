import React, { FC } from "react"

import * as SC from "./styles"
import Header from "../../components/Header"
import SearchPage from "../search"

const IndexPage: FC = () => {
  return (
    <SC.PageContainer>
      <Header opening />
      <SC.Spacer />
      <SC.BackgroundVideo
        source={require("../../assets/video.mp4")}
        isMuted
        shouldPlay
        isLooping
        resizeMode="cover"
      />
      <SearchPage />
    </SC.PageContainer>
  )
}

export default IndexPage
