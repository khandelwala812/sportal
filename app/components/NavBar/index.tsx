import React, { FC } from "react"
import { Pressable } from "react-native"
import {
  DrawerItemList,
  DrawerContentComponentProps
} from "@react-navigation/drawer"

import * as SC from "./styles"
import colors from "../../config/colors"
import routes from "../../config/routes"
import { IUser } from "../../types"

interface INavBarProps extends DrawerContentComponentProps {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

const NavBar: FC<INavBarProps> = ({ user, setUser, navigation, ...props }) => {
  const handleLogOut = () => {
    navigation.closeDrawer()
    setUser(null)
  }

  return (
    <SC.DrawerWrapper>
      {user ? (
        <SC.DrawerHeader>
          <SC.DrawerText>Hello, {user.firstName}</SC.DrawerText>
        </SC.DrawerHeader>
      ) : (
        <SC.DrawerInteractiveHeader
          onPress={() => navigation.navigate(routes.AUTH)}
        >
          <SC.DrawerText>Login</SC.DrawerText>
        </SC.DrawerInteractiveHeader>
      )}
      <DrawerItemList navigation={navigation} {...props} />
      {user && (
        <SC.LogOutButton
          label="Log out"
          labelStyle={{ color: colors.logOut }}
          onPress={handleLogOut}
        />
      )}
    </SC.DrawerWrapper>
  )
}

export default NavBar
