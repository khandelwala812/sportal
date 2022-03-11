import styled from "styled-components/native"
import Container from "../../components/Container"
import PageLayout from "../../layouts/PageLayout"
import SubmitButton from "../../components/SubmitButton"
import Text from "../../components/Text"

import colors from "../../config/colors"

export const ValidateCodePageLayout = styled(PageLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ValidateCodeBox = styled(Container)`
  width: 20%;
  height: 50%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)`
  color: ${colors.white};
  font-size: 18px;
  text-align: center;
  margin-bottom: 4px;
`

export const VerifyButton = styled(SubmitButton)`
  width: 75%;
  margin-top: 8px;
`
