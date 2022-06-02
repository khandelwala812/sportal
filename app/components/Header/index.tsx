import React, { FC } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import * as SC from "./styles"
import colors from "../../config/colors"
import routes from "../../config/routes"

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
          <TouchableOpacity onPress={navigation.openDrawer}>
            <MaterialCommunityIcons
              name="menu"
              size={40}
              color={colors.white}
            />
          </TouchableOpacity>
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
        <TouchableOpacity onPress={navigation.openDrawer}>
          <MaterialCommunityIcons name="menu" size={40} color={colors.black} />
        </TouchableOpacity>
      </SC.ProfileWrapper>
      <TouchableOpacity onPress={navigateToHome}>
        <SC.Logo source={require("../../assets/logo.png")} />
      </TouchableOpacity>
    </SC.HeaderWrapper>
  )
}

export default Header
