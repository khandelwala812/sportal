import styled from "styled-components/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProfileWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`

export const HeaderText = styled(Text)`
  margin: 0 8px;
`

export const ProfileIcon = styled(MaterialCommunityIcons)`
  margin: 4px;
`
