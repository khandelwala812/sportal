import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 8px;
  border-radius: 25px;
`

export const ButtonText = styled(Text)`
  color: ${colors.white};
  font-size: 18px;
`
