import styled from "styled-components/native"
import Container from "../../components/Container"
import FormField from "../../components/FormField"
import PageLayout from "../../layouts/PageLayout"
import SubmitButton from "../../components/SubmitButton"
import Text from "../../components/Text"

export const LoginPageLayout = styled(PageLayout)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginBox = styled(Container)`
  width: 20%;
  height: 50%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Text)`
  margin-bottom: 32px;
  font-size: 28px;
`

export const LoginButton = styled(SubmitButton)`
  width: 75%;
  margin-top: 16px;
`

export const RegisterText = styled(Text)`
  margin-top: 16px;
  font-size: 16px;
`

export const LoginField = styled(FormField)``
