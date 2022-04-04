import React, { FC } from "react"

import * as SC from "./styles"

interface ITextInputProps {
  title?: string
  style?: object
  inputStyle?: object
  left?: React.ReactNode
}

const TextInput: FC<ITextInputProps> = ({
  title,
  style,
  inputStyle,
  left,
  ...props
}) => {
  console.log(style)

  return (
    <SC.Wrapper>
      {title && <SC.Title>{title}</SC.Title>}
      <SC.InputWrapper style={style}>
        {typeof left !== "undefined" && left}
        <SC.AppTextInput style={[style, inputStyle]} {...props} />
      </SC.InputWrapper>
    </SC.Wrapper>
  )
}

export default TextInput
