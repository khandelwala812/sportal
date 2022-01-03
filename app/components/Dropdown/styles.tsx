import styled from "styled-components/native"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

import colors from "../../config/colors"

export const DropdownWrapper = styled.TouchableOpacity`
  background-color: ${colors.white};
  width: 150px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.black};
  border-radius: 10px;
`

export const Wrapper = styled.View`
  display: flex;
  justify-content: flex-start;
  margin: 0 32px;
  z-index: 1;
`

export const Title = styled(Text)`
  margin-bottom: 2px;
  font-size: 14px;
`

export const DropdownText = styled(Text)`
  margin-left: 8px;
`

export const Chevron = styled(Entypo)`
  margin-right: 8px;
`

export const DropdownList = styled.FlatList`
  background-color: ${colors.white};
  width: 150px;
  position: absolute;
  top: 65px;
  padding: 4px;
  border-radius: 5px;
`

export const OptionWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Checkmark = styled(MaterialCommunityIcons)`
  margin-left: 4px;
`

export const OptionIcon = styled(MaterialCommunityIcons)`
  margin: 0 4px;
`
