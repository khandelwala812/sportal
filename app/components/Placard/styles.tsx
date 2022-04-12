import styled from "rn-css"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

export const PlacardWrapper = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 4px;

  &:hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Title = styled(Text)`
  font-size: 20px;
`

export const Chevron = styled(MaterialCommunityIcons)``
