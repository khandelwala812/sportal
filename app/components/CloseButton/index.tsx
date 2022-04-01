import React, { FC } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import * as SC from "./styles"
import colors from "../../config/colors"

interface ICloseButtonProps {
  size?: number
  color?: string
  onPress: () => void
}

const CloseButton: FC<ICloseButtonProps> = ({
  size = 25,
  color = "black",
  onPress,
  ...props
}) => {
  return (
    <SC.ButtonWrapper onPress={onPress} {...props}>
      <MaterialCommunityIcons name="close" size={size} color={colors[color]} />
    </SC.ButtonWrapper>
  )
}

export default CloseButton
