import styled from "styled-components/native"
import { Video } from "expo-av"
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

export const BackgroundVideo = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
