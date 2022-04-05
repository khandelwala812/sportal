import React, { FC } from "react"

import * as SC from "./styles"

interface ITextProps {
  style?: object
}

const Text: FC<ITextProps> = ({ style, children, ...props }) => {
  return (
    <SC.AppText style={style} {...props}>
      {children}
    </SC.AppText>
  )
}

export default Text
