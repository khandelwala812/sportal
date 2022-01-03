import styled from "styled-components/native"
import { Entypo } from "@expo/vector-icons"
import Text from "../../components/Text"

import colors from "../../config/colors"

export const Wrapper = styled.View`
  background-color: ${colors.white};
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`

export const CardList = styled.FlatList``

export const Card = styled.View`
  background-color: ${colors.white};
  width: 800px;
  height: 250px;
  display: flex;
  flex-direction: row;
  margin: 32px;
  border: 1px solid #cec8c8;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
`

export const ClubImage = styled.Image`
  width: 45%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const DetailsWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  padding-left: 8px;
`

export const TitleWrapper = styled.View``

export const Title = styled(Text)`
  font-size: 26px;
  line-height: 30px;
`

export const Subtitle = styled(Text)`
  line-height: 21px;
`

export const RatingsWrapper = styled.View`
  padding: 4px;
`

export const Stars = styled.Image`
  width: 100px;
  height: 20px;
`

export const RatingsText = styled(Text)`
  font-size: 12px;
`

export const LocationWrapper = styled.View`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 8;
  right: 8;
`

export const LocationText = styled(Text)`
  font-size: 16px;
`

export const Location = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Pin = styled(Entypo)`
  margin-right: 4px;
`
