import styled from "styled-components/native"
import { Entypo } from "@expo/vector-icons"
import Container from "../../components/Container"
import PageLayout from "../../layouts/PageLayout"
import Text from "../../components/Text"

export const ClubPageLayout = styled(PageLayout)`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 60px;
`

export const ContentWrapper = styled(Container)`
  width: 70%;
  height: 100%;
  border-radius: 5px;
  padding: 0;
`

export const Banner = styled.Image`
  width: 100%;
  height: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const DetailsWrapper = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 250px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`

export const Logo = styled.Image`
  width: 75px;
  height: 75px;
  position: absolute;
  top: -30px;
  left: 25px;
  border-radius: 50%;
`

export const InfoWrapper = styled(Container)`
  width: 500px;
  margin-top: 40px;
  margin-left: 80px;
`

export const Title = styled(Text)`
  font-size: 30px;
  line-height: 35px;
`

export const Subtitle = styled(Text)`
  font-size: 20px;
  line-height: 23px;
`

export const LocationWrapper = styled.View`
  flex-direction: row;
  margin-top: 48px;
  padding-right: 8px;
`

export const Pin = styled(Entypo)`
  margin-right: 4px;
`

export const RatingsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`

export const Stars = styled.Image`
  width: 100px;
  height: 20px;
`

export const RatingsText = styled(Text)`
  margin: 0 8px;
  font-size: 16px;
  line-height: 19px;
`
