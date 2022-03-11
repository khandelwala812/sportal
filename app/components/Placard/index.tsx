import { useNavigation } from "@react-navigation/native"
import React, { FC } from "react"
import colors from "../../config/colors"

import * as SC from "./styles"

interface IPlacardProps {
  title: string
  to: string
}

const Placard: FC<IPlacardProps> = ({ title, to }) => {
  const navigation = useNavigation()

  const navigateTo = () => {
    navigation.navigate(to)
  }

  return (
    <SC.PlacardWrapper onPress={navigateTo}>
      <SC.Title>{title}</SC.Title>
      <SC.Chevron name="chevron-right" size={24} color={colors.white} />
    </SC.PlacardWrapper>
  )
}

export default Placard
