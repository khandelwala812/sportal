import styled from "styled-components/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

import colors from "../../config/colors"
import { LinearGradient } from "expo-linear-gradient"

export const HeaderWrapper = styled.View`
  background-color: ${props => !props.opening && colors.background};
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`

export const ProfileWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  margin: 4px;
  border-radius: 50%;
`

export const HeaderText = styled(Text)`
  color: ${colors.white};
  margin: 0 8px;
`

export const ProfileIcon = styled(MaterialCommunityIcons)`
  margin: 4px;
`

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
`
