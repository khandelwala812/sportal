import React, { useEffect, useState } from "react"

import { IClub } from "../../types"
import useFilters from "../../hooks/useFilters"
import * as SC from "./styles"
import client from "../../api/client"
import { BASE_API_URL } from "../../config/constants"
import ClubCard from "../../components/ClubCard"

const HomePage = () => {
  const { filters } = useFilters()
  const [clubs, setClubs] = useState<IClub[] | null>(null)

  const loadClubs = async () => {
    try {
      const response = await client.post<IClub[]>(`${BASE_API_URL}/clubs`, {
        data: { filters }
      })
      const loadedClubs = response.data
      setClubs(loadedClubs as IClub[])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadClubs()
  }, [])

  return (
    <SC.Wrapper color="background">
      <SC.Silhouette source={require("../../assets/silhouette.jpg")} />
      <SC.CardListWrapper>
        <SC.CardList
          data={clubs ?? []}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => `k-${i}`}
          renderItem={({ item }) => {
            const club = item as IClub
            return <ClubCard {...club} />
          }}
        />
      </SC.CardListWrapper>
      <SC.Filler />
    </SC.Wrapper>
  )
}

export default HomePage
