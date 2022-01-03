import React from "react"
import Text from "../../components/Text"

import * as SC from "./styles"

const clubs = [
  {
    name: "Los Angeles Dodgers",
    sport: "Baseball",
    image: "dodgers.jpg",
    reviews: {
      number: 110
    },
    distanceFrom: 0.7,
    location: "Los Angeles, CA"
  }
]

interface IClub {
  name: string
  sport: string
  image: string
  reviews: {
    number: number
    stars?: number
  }
  distanceFrom: number
  location: string
}

const HomePage = () => {
  return (
    <SC.Wrapper>
      <SC.CardList
        data={clubs}
        keyExtractor={(_, i) => `k-${i}`}
        renderItem={({ item }) => {
          const club = item as IClub
          return (
            <SC.Card>
              <SC.ClubImage source={require(`../../assets/${club.image}`)} />
              <SC.DetailsWrapper>
                <SC.TitleWrapper>
                  <SC.Title>{club.name}</SC.Title>
                  <SC.Subtitle>{club.sport}</SC.Subtitle>
                </SC.TitleWrapper>
                <SC.RatingsWrapper>
                  <SC.Stars source={require("../../assets/stars.png")} />
                  <SC.RatingsText>{club.reviews.number} Reviews</SC.RatingsText>
                </SC.RatingsWrapper>
                <SC.LocationWrapper>
                  <SC.LocationText>{club.distanceFrom} mi</SC.LocationText>
                  <SC.Location>
                    <SC.Pin name="location-pin" size={24} color="black" />
                    <SC.LocationText>{club.location}</SC.LocationText>
                  </SC.Location>
                </SC.LocationWrapper>
              </SC.DetailsWrapper>
            </SC.Card>
          )
        }}
      />
    </SC.Wrapper>
  )
}

export default HomePage
