import styled from "styled-components/native"
import Container from "../../components/Container"
import FormField from "../../components/FormField"
import SubmitButton from "../../components/SubmitButton"
import Text from "../../components/Text"
import PageLayout from "../../layouts/PageLayout"

import colors from "../../config/colors"

export const RegisterPageLayout = styled(PageLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterBox = styled(Container)`
  width: 20%;
  height: 50%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)`
  margin-bottom: 16px;
  color: ${colors.white};
  font-size: 28px;
`

export const Field = styled(FormField)`
  height: 32px;
`

export const RegisterButton = styled(SubmitButton)`
  width: 75%;
  margin-top: 8px;
`
