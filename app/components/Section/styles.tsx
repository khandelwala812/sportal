import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const SectionWrapper = styled.View`
  width: 100%;
  margin: 16px 0;
`

export const Title = styled(Text)`
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
`

export const Body = styled(Text)`
  color: ${colors.white};
`
