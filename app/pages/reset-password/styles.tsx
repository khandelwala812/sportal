import styled from "styled-components/native"
import SubmitButton from "../../components/SubmitButton"
import Text from "../../components/Text"

import colors from "../../config/colors"

export const Title = styled(Text)`
  margin-bottom: 32px;
  color: ${colors.white};
  font-size: 28px;
`

export const ResetButton = styled(SubmitButton)`
  width: 75%;
  margin-top: 8px;
`
