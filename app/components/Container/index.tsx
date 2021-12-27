import React, { FC } from "react"

import * as SC from "./styles"
import colors from "../../config/colors"

interface IContainerProps {
  color?: string
  style?: object
}

const Container: FC<IContainerProps> = ({
  color = "white",
  style,
  children,
  ...props
}) => (
  <SC.AppContainer
    style={[style, { backgroundColor: colors[color] }]}
    {...props}
  >
    {children}
  </SC.AppContainer>
)

export default Container
