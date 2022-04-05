import React, { FC } from "react"

import * as SC from "./styles"

interface ITextInputProps {
  title?: string
  style?: object
  titleStyle?: object
  inputStyle?: object
  left?: React.ReactNode
}

const TextInput: FC<ITextInputProps> = ({
  title,
  style,
  titleStyle,
  inputStyle,
  left,
  ...props
}) => {
  return (
    <SC.Wrapper>
      {title && <SC.Title style={titleStyle}>{title}</SC.Title>}
      <SC.InputWrapper style={style}>
        {typeof left !== "undefined" && left}
        <SC.AppTextInput style={[style, inputStyle]} {...props} />
      </SC.InputWrapper>
    </SC.Wrapper>
  )
}

export default TextInput
