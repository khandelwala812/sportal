import React, { FC } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import routes from "../../config/routes"
import NavBar from "../NavBar"

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
        <SC.ProfileWrapper>
          {/* <HeaderLink
            title="Find a Club"
            to={modals.SEARCH}
            color="white"
            isModal
          />
          <HeaderLink title="Events" to={routes.EVENTS} color="white" />
          <HeaderLink title="Videos" to={routes.VIDEOS} color="white" />
          <HeaderLink title="Interviews" color="white" /> */}
        </SC.ProfileWrapper>
        <SC.Logo source={require("../../assets/logo.png")} />
      </SC.HeaderWrapper>
    )
  }

  return (
    <SC.HeaderWrapper>
      <SC.ProfileWrapper>
        {/* <HeaderLink title="My Clubs" />
        <HeaderLink title="Events" to={routes.EVENTS} />
        <HeaderLink title="Videos" to={routes.VIDEOS} />
      <HeaderLink title="Messages" /> */}
      </SC.ProfileWrapper>
      <TouchableOpacity onPress={navigateToHome}>
        <SC.Logo source={require("../../assets/logo.png")} />
      </TouchableOpacity>
      {/* <SC.Gradient
        colors={colors.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      /> */}
    </SC.HeaderWrapper>
  )
}

export default Header
