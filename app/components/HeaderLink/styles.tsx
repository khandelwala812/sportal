import styled from "rn-css"
import Text from "../Text"

export const LinkWrapper = styled.TouchableOpacity`
  align-items: center;

  &:hover {
    box-shadow: 4px 3px 3px 2px rgba(0, 0, 0, 0.35);
  }
`

export const Title = styled(Text)`
  margin: 0 8px;
`
