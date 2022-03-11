import React, { FC, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import { IClub, ICoach, ITeam } from "../../types"
import client from "../../api/client"
import CoachCard from "../../components/CoachCard"
import Link from "../../components/Link"
import Section from "../../components/Section"
import Stars from "../../components/Stars"
import TeamCard from "../../components/TeamCard"
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
  const navigation = useNavigation()
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
    <SC.ClubPageLayout title={club.name} color="background">
      <SC.ContentWrapper color="foreground">
        <SC.Banner source={require(`../../assets/${club.image}`)} />
        <SC.DetailsWrapper color="foreground">
          <SC.Logo
            source={require(`../../assets/${club.logo ?? "logo.png"}`)}
          />
          <SC.InfoWrapper>
            <SC.Title>{club.name}</SC.Title>
            <SC.Subtitle>{club.sport}</SC.Subtitle>
            <SC.RatingsWrapper>
              <Stars number={5} />
              <SC.RatingsText>({club.reviews.number})</SC.RatingsText>
            </SC.RatingsWrapper>
            {club.website && <Link url={club.website} icon external />}
            {club.about && (
              <SC.AboutSection title="About" content={club.about} />
            )}
            {club.teams && (
              <Section title="Teams">
                <FlatList
                  data={club.teams}
                  horizontal
                  keyExtractor={team => team.sport}
                  renderItem={({ item }) => {
                    const team = item as ITeam
                    return <TeamCard {...team} />
                  }}
                />
              </Section>
            )}
            {club.coaches && (
              <Section title="Coaches">
                <FlatList
                  data={club.coaches}
                  horizontal
                  keyExtractor={coach => coach.name}
                  renderItem={({ item }) => {
                    const coach = item as ICoach
                    return <CoachCard {...coach} />
                  }}
                />
              </Section>
            )}
          </SC.InfoWrapper>
          {/* <SC.ContactWrapper>
              <SC.Subtitle>avikwal123@gmail.com</SC.Subtitle>
              <SC.Subtitle>949-632-8448</SC.Subtitle>
            </SC.ContactWrapper> */}
          <SC.LocationWrapper>
            <SC.Pin name="location-pin" size={24} color="white" />
            <SC.Subtitle>{club.location}</SC.Subtitle>
          </SC.LocationWrapper>
        </SC.DetailsWrapper>
      </SC.ContentWrapper>
    </SC.ClubPageLayout>
  )
}

export default ClubPage
