import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"

import colors from "../../config/colors"

export const AppContainer = styled.View`
  background-color: ${colors.white};
  width: 100%;
  padding: 8px;
`

export const GradientContainer = styled(LinearGradient)`
  width: 100%;
  padding: 8px;
`
