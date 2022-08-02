import styled from "styled-components/native"
import { Video } from "expo-av"
import Button from "../../components/Button"
import PageLayout from "../../layouts/PageLayout"
import Text from "../../components/Text"

import colors from "../../config/colors"

export const ReviewVideoPageLayout = styled(PageLayout)`
  display: flex;
  align-items: center;
  padding-top: 100px;
`

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 16px;
`

export const VideoToReview = styled(Video)`
  width: 50%;
  height: 400px;
`

export const ReviewWrapper = styled.View`
  background: ${colors.light};
  width: 50%;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
`

export const Heading = styled(Text)`
  font-weight: 300;
`

export const Timestamp = styled(Text)`
  color: ${colors.link};
  margin: 0 4px;
`

export const ButtonWrapper = styled.View`
  flex-direction: row;
`

export const DecisionButton = styled(Button)`
  height: 30px;
  margin: 0 4px;
`
