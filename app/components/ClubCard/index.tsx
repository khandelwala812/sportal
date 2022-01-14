import React, { FC } from "react"

import * as SC from "./styles"
import { IClub } from "../../types"

const ClubCard: FC<IClub> = ({
  name,
  sport,
  image,
  reviews,
  distanceFrom,
  location
}) => {
  return (
    <SC.CardWrapper>
      <SC.ClubImage source={require(`../../assets/${image}`)} />
      <SC.DetailsWrapper>
        <SC.TitleWrapper>
          <SC.Title numberOfLines={1}>{name}</SC.Title>
          <SC.Subtitle>{sport}</SC.Subtitle>
        </SC.TitleWrapper>
        <SC.RatingsWrapper>
          <SC.Stars source={require("../../assets/stars.png")} />
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
