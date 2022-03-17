import React, { FC, useRef, useState } from "react"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import useAuth from "../../hooks/useAuth"
import * as SC from "./styles"
import routes from "../../config/routes"
import { ProfileIcon } from "../Header/styles"
import useOutsideClicked from "../../hooks/useOutsideClicked"

const NavBar: FC = () => {
  const { user, setUser } = useAuth()
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

  const signOut = () => {
    setUser(null)
    setFloatVisible(false)
  }

  return (
    <TouchableOpacity ref={floatRef} onPress={handleSelect}>
      <ProfileIcon name="account-circle" size={40} color="white" />
      {floatVisible && !clickedOutside && (
        <SC.Float>
          <TouchableOpacity onPress={signOut}>
            <SC.FloatText>Sign out</SC.FloatText>
          </TouchableOpacity>
        </SC.Float>
      )}
    </TouchableOpacity>
  )
}

export default NavBar
