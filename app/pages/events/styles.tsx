import styled from "styled-components/native"
import { Entypo } from "@expo/vector-icons"
import Button from "../../components/Button"
import Container from "../../components/Container"
import CloseButton from "../../components/CloseButton"
import PageLayout from "../../layouts/PageLayout"
import Text from "../../components/Text"
import TextInput from "../../components/TextInput"

import colors from "../../config/colors"

export const Title = styled(Text)`
  align-self: flex-start;
  font-size: 30px;
  font-weight: 400;
`

export const EventsPageLayout = styled(PageLayout)`
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`

export const EventWrapper = styled.View`
  background: ${colors.foreground};
  width: 500px;
  height: 220px;
  justify-content: center;
  align-items: center;
  margin: 4px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ContentWrapper = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  padding: 8px;
`

export const Image = styled.Image`
  width: 225px;
  height: 112px;
  border-radius: 5px;
`

export const DetailsWrapper = styled.View`
  align-items: flex-start;
`

export const EventTitle = styled(Text)`
  font-size: 24px;
  margin-top: 4px;
`

export const Column = styled.View`
  width: 50%;
  height: 100%;
  gap: 4px;
`

export const LocationWrapper = styled.View`
  width: 120px;
  flex-direction: row;
  align-items: center;
`

export const Marker = styled(Entypo)`
  margin: 0;
`

export const Location = styled(Text)`
  font-size: 14px;
`

export const Subtitle = styled(Text)`
  font-size: 14px;
  line-height: 15px;
`

export const Time = styled(Subtitle)`
  color: ${colors.medium};
`

export const RegisterButton = styled(Button)`
  width: 100px;
  height: 30px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  margin: 2px;
`

export const WaitlistButton = styled(RegisterButton)`
  width: 130px;
`

export const RegisterWrapper = styled(Container)`
  width: 500px;
  align-items: center;
  align-self: center;
  gap: 4px;
  padding-top: 16px;
  border-radius: 8px;
`

export const Cross = styled(CloseButton)`
  position: absolute;
  top: 2px;
  right: 2px;
`

export const Comments = styled(TextInput)`
  width: 470px;
  height: 100px;
  align-items: flex-start;
  border-radius: 4px;
`

export const ConfirmButton = styled(Button)`
  width: 100px;
  height: 30px;
  align-self: flex-end;
  margin: 4px;
`

export const UnregisterWrapper = styled(RegisterWrapper)`
  width: 300px;
`

export const UnregisterText = styled(Text)``
