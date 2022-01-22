import React, { FC, useEffect, useState } from "react"

import * as SC from "./styles"
import { IClub } from "../../types"
import client from "../../api/client"
import Text from "../../components/Text"

interface IClubPageProps {
  route: {
    params: {
      clubId: string
    }
  }
}

const ClubPage: FC<IClubPageProps> = ({ route }) => {
  const { clubId } = route.params
  const [club, setClub] = useState<IClub | null>(null)

  const loadClub = async () => {
    const response = await client.get<IClub>(`/clubs/search?clubId=${clubId}`)
    setClub(response.data as IClub)
  }

  useEffect(() => {
    loadClub()
  }, [])

  if (!club) return <Text>Loading...</Text>

  return (
    <SC.ClubPageLayout title={club.name} isGradient header={false}>
      <SC.ContentWrapper>
        <SC.Banner source={require(`../../assets/${club.image}`)} />
        <SC.DetailsWrapper>
          <SC.Logo source={require("../../assets/logo.png")} />
          <SC.InfoWrapper>
            <SC.Title>{club.name}</SC.Title>
            <SC.Subtitle>{club.sport}</SC.Subtitle>
            <SC.RatingsWrapper>
              <SC.Stars source={require("../../assets/stars.png")} />
              <SC.RatingsText>({club.reviews.number})</SC.RatingsText>
            </SC.RatingsWrapper>
          </SC.InfoWrapper>
          <SC.LocationWrapper>
            <SC.Pin name="location-pin" size={24} color="black" />
            <SC.Subtitle>{club.location}</SC.Subtitle>
          </SC.LocationWrapper>
        </SC.DetailsWrapper>
      </SC.ContentWrapper>
    </SC.ClubPageLayout>
  )
}

export default ClubPage
