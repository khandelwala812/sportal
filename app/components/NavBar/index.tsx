import React, { FC } from "react"
import {
  DrawerItemList,
  DrawerContentComponentProps
} from "@react-navigation/drawer"

import * as SC from "./styles"

const NavBar: FC<DrawerContentComponentProps> = props => {
  return (
    <SC.NavBarWrapper>
      <DrawerItemList {...props} />
    </SC.NavBarWrapper>
  )
}

export default NavBar
