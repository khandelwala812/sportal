import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const CardWrapper = styled.View``

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 400;
`

export const Subtitle = styled(Text)`
  color: ${colors.medium};
  font-weight: 400;
`
