import React, { useEffect, useState } from "react"

import { IClub } from "../../types"
import useFilters from "../../hooks/useFilters"
import * as SC from "./styles"
import { BASE_API_URL } from "../../config/constants"
import colors from "../../config/colors"
import ClubCard from "../../components/ClubCard"

const HomePage = () => {
  const { filters } = useFilters()
  const [clubs, setClubs] = useState(null)

  const loadClubs = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/clubs`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ filters })
      })
      const loadedClubs = await response.json()
      setClubs(loadedClubs)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadClubs()
  }, [])

  return (
    <SC.Wrapper
      colors={colors.gradient as string[]}
      start={{ x: 0.1, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <SC.CardList
        data={clubs ?? []}
        keyExtractor={(_, i) => `k-${i}`}
        renderItem={({ item }) => {
          const club = item as IClub
          return <ClubCard {...club} />
        }}
        showsVerticalScrollIndicator={false}
      />
    </SC.Wrapper>
  )
}

export default HomePage
