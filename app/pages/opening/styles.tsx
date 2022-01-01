import styled from "styled-components/native"
import Button from "../../components/Button"
import Container from "../../components/Container"

export const PageContainer = styled(Container)`
  flex: 1;
  padding: 0;
`

export const SearchContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`

export const SearchButton = styled(Button)`
  width: 270px;
  margin: 32px 0;
  z-index: -1;
`

export const Spacer = styled.View`
  height: 30vh;
`

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
`
