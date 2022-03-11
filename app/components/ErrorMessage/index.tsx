import React, { FC } from "react"

import * as SC from "./styles"

interface IErrorMessageProps {
  error: string
  visible: boolean
}

const ErrorMessage: FC<IErrorMessageProps> = ({ error, visible, ...props }) => (
  <SC.Message {...props}>{!visible || !error ? " " : error}</SC.Message>
)

export default ErrorMessage
