import React, { FC } from "react"

import * as SC from "./styles"
import colors from "../../config/colors"

interface IButtonProps {
  title: string
  onPress?: () => void
  color?: string
  textStyle?: object
  buttonStyle?: object
}

const Button: FC<IButtonProps> = ({
  title,
  onPress,
  color = "black",
  textStyle,
  buttonStyle,
  children,
  ...props
}) => (
  <SC.ButtonContainer
    style={[{ backgroundColor: colors[color] }, buttonStyle]}
    onPress={onPress}
    {...props}
  >
    <SC.ButtonText style={textStyle}>{title}</SC.ButtonText>
    {children}
  </SC.ButtonContainer>
)

export default Button
