import styled from "styled-components/native"
import Container from "../../components/Container"
import PageLayout from "../../layouts/PageLayout"
import SubmitButton from "../../components/SubmitButton"
import Text from "../../components/Text"

import colors from "../../config/colors"

export const PasswordPageLayout = styled(PageLayout)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordBox = styled(Container)`
  width: 20%;
  height: 50%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)`
  margin-bottom: 32px;
  color: ${colors.white};
  font-size: 28px;
`

export const Subtitle = styled(Text)`
  color: ${colors.white};
  font-size: 18px;
  text-align: center;
`

export const Bold = styled(Subtitle)`
  font-weight: bold;
`

export const ResetButton = styled(SubmitButton)`
  width: 75%;
  margin-top: 16px;
`
