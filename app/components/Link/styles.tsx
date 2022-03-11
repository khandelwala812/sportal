import styled from "rn-css"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

import colors from "../../config/colors"

export const LinkWrapper = styled.TouchableOpacity`
  flex-direction: row;
`

export const LinkIcon = styled(MaterialCommunityIcons)`
  margin-right: 4px;
`

export const LinkText = styled(Text)`
  color: ${colors.link as string};
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.link};
  }
`
