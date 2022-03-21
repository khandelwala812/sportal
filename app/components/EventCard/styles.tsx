import styled from "styled-components/native"
import Button from "../Button"
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

export const EditButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2px;
  padding: 0;
`

export const Pencil = styled(MaterialCommunityIcons)``
