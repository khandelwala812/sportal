import React, { FC } from "react"

import * as SC from "./styles"
import colors from "../../config/colors"
import { LinearGradient } from "expo-linear-gradient"

interface IContainerProps {
  color?: string
  style?: object
  isGradient?: boolean
}

const Container: FC<IContainerProps> = ({
  color = "white",
  style,
  isGradient,
  children,
  ...props
}) => {
  if (isGradient)
    return (
      <SC.GradientContainer style={style} colors={colors.gradient} {...props}>
        {children}
      </SC.GradientContainer>
    )

  return (
    <SC.AppContainer
      style={[style, { backgroundColor: colors[color] }]}
      {...props}
    >
      {children}
    </SC.AppContainer>
  )
}

export default Container
