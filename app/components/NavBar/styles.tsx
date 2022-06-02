import styled from "rn-css"
import { Pressable } from "react-native"
import { DrawerItem } from "@react-navigation/drawer"
import Text from "../Text"

import colors from "../../config/colors"

export const DrawerWrapper = styled.View``

export const DrawerText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0;
  margin-left: 12px;
`

export const DrawerHeader = styled.View`
  background: ${colors.light};
`

export const DrawerInteractiveHeader = styled(Pressable)`
  background: ${colors.light};
`

export const LogOutButton = styled(DrawerItem)`
  &:hover {
    background: rgba(199, 18, 18, 0.2);
  }
`
