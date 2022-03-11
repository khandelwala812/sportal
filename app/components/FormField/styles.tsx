import styled from "styled-components/native"
import TextInput from "../TextInput"

export const FieldWrapper = styled.View`
  display: flex;
  align-items: flex-start;
`

export const TextField = styled(TextInput)`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 2px;
  border: none;
  border-radius: 5px;
`
