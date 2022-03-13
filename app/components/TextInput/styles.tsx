import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const InputWrapper = styled.View`
  background-color: ${colors.white};
  width: 500px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${colors.black};
  border-radius: 10px;
`

export const AppTextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 4px;
  color: ${colors.dark};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
`

export const Wrapper = styled.View`
  display: flex;
  justify-content: flex-start;
`

export const Title = styled(Text)`
  margin-bottom: 2px;
  font-size: 14px;
`
