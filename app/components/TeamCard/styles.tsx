import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const CardWrapper = styled.View`
  background-color: ${colors.background};
  margin: 4px;
  padding: 4px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled(Text)`
  color: ${colors.medium};
  font-weight: bold;
`

export const Subtitle = styled(Text)`
  color: ${colors.medium};
  font-size: 14px;
`
