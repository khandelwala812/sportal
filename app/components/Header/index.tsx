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
}

const Header: FC<IHeaderProps> = ({ opening }) => {
  const { user } = useAuth()
  const navigation = useNavigation()

  const navigateToHome = () => {
    navigation.navigate(routes.HOME)
  }

  if (opening) {
    return (
      <SC.HeaderWrapper opening>
        <SC.Logo source={require("../../assets/logo.png")} />
        <SC.ProfileWrapper>
          <HeaderLink title="Find a Club" to={modals.SEARCH} isModal />
          {user && <HeaderLink title="Events" to={routes.EVENTS} />}
          <HeaderLink title="Interviews" />
          <NavBar />
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
