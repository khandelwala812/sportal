import styled from "styled-components/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Button from "../Button"
import Text from "../Text"

import colors from "../../config/colors"

export const CardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const UserText = styled(Text)`
  color: ${colors.white};
`

export const ButtonWrapper = styled.View`
  flex-direction: row;
  gap: 4px;
`

export const ActionButton = styled(Button)`
  margin: 0;
  padding: 0;
`

export const Icon = styled(MaterialCommunityIcons)``
