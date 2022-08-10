import styled from "styled-components/native"
import colors from "../../config/colors"
import Text from "../Text"

export const TOCWrapper = styled.View`
  flex-direction: row;
`

export const Line = styled.View`
  background: ${colors.link};
  width: 2px;
  margin-right: 8px;
`

export const TOCText = styled(Text)`
  color: ${colors.link};
`
