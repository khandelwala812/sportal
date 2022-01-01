import React, { FC } from "react"

import * as SC from "./styles"

interface ITextInputProps {
  title?: string
  left?: React.ReactNode
}

const TextInput: FC<ITextInputProps> = ({ title, left, ...props }) => {
  return (
    <SC.Wrapper>
      {title && <SC.Title>{title}</SC.Title>}
      <SC.InputWrapper>
        {typeof left !== "undefined" && left}
        <SC.AppTextInput {...props} />
      </SC.InputWrapper>
    </SC.Wrapper>
  )
}

export default TextInput
