import React, { FC } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import colors from "../../config/colors"
import modals from "../../config/modals"
import routes from "../../config/routes"
import HeaderLink from "../HeaderLink"
import NavBar from "../NavBar"
import useAuth from "../../hooks/useAuth"

interface IHeaderProps {
  opening?: boolean
  darkTheme?: boolean
}

const Header: FC<IHeaderProps> = ({ opening }) => {
  const navigation = useNavigation()

  const navigateToHome = () => {
    navigation.navigate(routes.HOME)
  }

  if (opening) {
    return (
      <SC.HeaderWrapper opening>
        <SC.Logo source={require("../../assets/logo.png")} />
        <SC.ProfileWrapper>
          <HeaderLink
            title="Find a Club"
            to={modals.SEARCH}
            color="white"
            isModal
          />
          <HeaderLink title="Events" to={routes.EVENTS} color="white" />
          <HeaderLink title="Videos" to={routes.VIDEOS} color="white" />
          <HeaderLink title="Interviews" color="white" />
          <NavBar darkTheme />
        </SC.ProfileWrapper>
      </SC.HeaderWrapper>
    )
  }

  return (
    <SC.HeaderWrapper>
      <TouchableOpacity onPress={navigateToHome}>
        <SC.Logo source={require("../../assets/logo.png")} />
      </TouchableOpacity>
      <SC.ProfileWrapper>
        <HeaderLink title="My Clubs" />
        <HeaderLink title="Events" to={routes.EVENTS} />
        <HeaderLink title="Videos" to={routes.VIDEOS} />
        <HeaderLink title="Messages" />
        <NavBar />
      </SC.ProfileWrapper>
      {/* <SC.Gradient
        colors={colors.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      /> */}
    </SC.HeaderWrapper>
  )
}

export default Header
