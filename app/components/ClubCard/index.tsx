import React, { FC } from "react"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import { IClub } from "../../types"
import routes from "../../config/routes"
import Stars from "../Stars"

const ClubCard: FC<IClub> = ({
  _id,
  name,
  sport,
  image,
  reviews,
  distanceFrom,
  location
}) => {
  const navigation = useNavigation()

  const handleSelect = () => {
    navigation.navigate(routes.CLUB, { clubId: _id })
  }

  return (
    <SC.CardWrapper onPress={handleSelect}>
      <SC.ClubImage source={require(`../../assets/${image}`)} />
      <SC.DetailsWrapper>
        <SC.TitleWrapper>
          <SC.Title numberOfLines={1}>{name}</SC.Title>
          <SC.Subtitle>{sport}</SC.Subtitle>
        </SC.TitleWrapper>
        <SC.RatingsWrapper>
          <Stars number={5} />
          <SC.RatingsText>{reviews.number} Reviews</SC.RatingsText>
        </SC.RatingsWrapper>
        <SC.LocationWrapper>
          <SC.LocationText>{distanceFrom} mi</SC.LocationText>
          <SC.Location>
            <SC.Pin name="location-pin" size={24} color="black" />
            <SC.LocationText>{location}</SC.LocationText>
          </SC.Location>
        </SC.LocationWrapper>
      </SC.DetailsWrapper>
    </SC.CardWrapper>
  )
}

export default ClubCard
