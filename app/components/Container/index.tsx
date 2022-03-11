import React, { FC } from "react"

import * as SC from "./styles"
import colors from "../../config/colors"

interface IContainerProps {
  color?: string
  style?: object
  isGradient?: boolean
}

const Container: FC<IContainerProps> = ({
  color,
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
      style={[style, { backgroundColor: color ? colors[color] : undefined }]}
      {...props}
    >
      {children}
    </SC.AppContainer>
  )
}

export default Container
