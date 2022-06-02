import styled from "styled-components/native"
import Button from "../../components/Button"
import Container from "../../components/Container"

export const SearchContainer = styled(Container)`
  height: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`

export const SearchButton = styled(Button)`
  width: 270px;
  margin: 32px 0;
  z-index: -1;
`

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
`
