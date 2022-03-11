import styled from "styled-components/native"
import BasePageLayout from "../PageLayout"
import Container from "../../components/Container"

export const PageLayout = styled(BasePageLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled(Container)`
  width: 20%;
  height: 50%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`
