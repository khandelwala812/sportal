import styled from "styled-components/native"

import colors from "../../config/colors"

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 15px;
  border-radius: 25px;
`

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`
