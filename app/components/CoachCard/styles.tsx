import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const CardWrapper = styled.View`
  background: ${colors.background};
  width: 200px;
  max-height: 250px;
  margin: 4px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Image = styled.Image`
  width: 100%;
  height: 120px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
export const TextWrapper = styled.View`
  padding: 4px;
`

export const Title = styled(Text)`
  color: ${colors.medium};
  font-size: 20px;
  font-weight: bold;
`

export const Subtitle = styled(Text)`
  color: ${colors.medium};
`
