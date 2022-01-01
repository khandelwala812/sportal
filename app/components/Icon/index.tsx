import React, { FC } from "react"

import * as SC from "./styles"

interface IIconProps {
  name: any
  size?: number
  color?: string
}

const Icon: FC<IIconProps> = ({ name, size = 24, color = "black" }) => (
  <SC.FoundationIcon name={name} size={size} color={color} />
)

export default Icon
