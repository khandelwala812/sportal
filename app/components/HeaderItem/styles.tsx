import styled from "styled-components/native"
import { Pressable } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

import colors from "../../config/colors"

export const Wrapper = styled(Pressable)`
  height: 40px;
  margin: 0 64px;
`

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`

export const HeaderText = styled(Text)`
  font-size: 24;
  font-weight: 400;
`

export const Chevron = styled(MaterialCommunityIcons)``

export const Dropdown = styled.View`
  background-color: ${colors.background};
  width: 128px;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Separator = styled.View`
  height: 1px;
  background-color: ${colors.light};
  margin: 8px 0;
`

export const Subheading = styled(Text)`
  font-size: 14px;
`
