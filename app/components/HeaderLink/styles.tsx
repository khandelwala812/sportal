import styled from "rn-css"
import Text from "../Text"

import colors from "../../config/colors"

export const LinkWrapper = styled.TouchableOpacity`
  &:hover {
    box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
  }
`

export const Title = styled(Text)`
  color: ${colors.white};
  margin: 0 8px;
`
