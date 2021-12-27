import React, { FC } from "react"

import * as SC from "./styles"

const Text: FC = ({ children, ...props }) => {
  return <SC.AppText {...props}>{children}</SC.AppText>
}

export default Text
