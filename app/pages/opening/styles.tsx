import styled from "styled-components/native"
import { Video } from "expo-av"
import Container from "../../components/Container"

export const PageContainer = styled(Container)`
  flex: 1;
  padding: 0;
`

export const Spacer = styled.View`
  height: 30vh;
`

export const BackgroundVideo = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
