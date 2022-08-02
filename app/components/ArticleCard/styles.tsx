import styled from "styled-components/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

import colors from "../../config/colors"

export const CardWrapper = styled.Pressable`
  width: 650px;
  height: 200px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-left: 8px;
  gap: 32px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ContentWrapper = styled.View``

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: bold;
`

export const DetailsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Subtitle = styled(Text)`
  color: ${colors.medium};
  font-size: 18px;
`

export const Separator = styled(MaterialCommunityIcons)`
  margin: 0;
`

export const Subtext = styled(Text)`
  width: 400px;
  font-size: 14px;
`

export const Thumbnail = styled.Image`
  width: 200px;
  height: 100%;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`
