import React, { FC, useRef, useState } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import useAuth from "../../hooks/useAuth"
import * as SC from "./styles"
import routes from "../../config/routes"
import { ProfileIcon } from "../Header/styles"
import useOutsideClicked from "../../hooks/useOutsideClicked"

const NavBar: FC = () => {
  const { user } = useAuth()
  const navigation = useNavigation()
  const floatRef = useRef(null)
  const clickedOutside = useOutsideClicked(floatRef)
  const [floatVisible, setFloatVisible] = useState<boolean>(false)

  const handleSelect = () => {
    if (!user) {
      return navigation.navigate(routes.LOGIN)
    }

    setFloatVisible(visible => !visible)
  }

  return (
    <TouchableOpacity ref={floatRef} onPress={handleSelect}>
      <ProfileIcon name="account-circle" size={40} color="white" />
      {floatVisible && !clickedOutside && (
        <SC.Float>
          <SC.FloatText>You are already logged in</SC.FloatText>
        </SC.Float>
      )}
    </TouchableOpacity>
  )
}

export default NavBar
