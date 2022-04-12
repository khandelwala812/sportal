import styled from "styled-components/native"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import Button from "../Button"
import Text from "../Text"

export const CardWrapper = styled.View`
  width: 100%;
`

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 400;
`

export const LocationWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Marker = styled(Entypo)`
  margin: 0;
`

export const Location = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`

export const Subtitle = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`

export const Description = styled(Text)`
  font-size: 14px;
`

export const EditButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2px;
  padding: 0;
`

export const Pencil = styled(MaterialCommunityIcons)``
