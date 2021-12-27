import React, { FC } from "react"

import * as SC from "./styles"
import colors from "../../config/colors"

interface IButtonProps {
  title: string
  onPress?: () => void
  color?: string
  style?: object
  textStyle?: object
}

const Button: FC<IButtonProps> = ({
  title,
  onPress,
  color = "black",
  style,
  // textStyle,
  children,
  ...props
}) => (
  <SC.ButtonContainer
    style={[style, { backgroundColor: colors[color] }]}
    onPress={onPress}
    {...props}
  >
    <SC.ButtonText>{title}</SC.ButtonText>
    {children}
  </SC.ButtonContainer>
)

export default Button
