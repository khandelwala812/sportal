import React, { FC } from "react"
import { TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import Header from "../../components/Header"
import SearchPage from "../search"

const IndexPage: FC = () => {
  const navigation = useNavigation()

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
      {/* <TouchableOpacity onPress={navigation.openDrawer}>
        <MaterialCommunityIcons name="circle" size={24} color="white" />
      </TouchableOpacity> */}
    </SC.PageContainer>
  )
}

export default IndexPage
