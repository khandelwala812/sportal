import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const Float = styled.View`
  background-color: ${colors.light};
  width: 100px;
  height: 50px;
  position: absolute;
  top: 55px;
  right: 5px;
  padding: 2px;
  border-radius: 10px;
  z-index: 2;
`

export const FloatText = styled(Text)`
  font-size: 14px;
  text-align: center;
`
