import React, { FC, useEffect } from "react"

import * as SC from "./styles"
import useClub from "../../hooks/useClub"
import clubsApi from "../../api/clubs"
import ClubHeader from "../../components/ClubHeader"
import Header from "../../components/Header"
import Gallery from "../../components/Gallery"

interface IClubPageProps {
  route?: {
    params?: {
      clubId?: string
    }
  }
}

const ClubPage: FC<IClubPageProps> = ({ route }) => {
  const clubId = route?.params?.clubId
  const { club, setClub } = useClub()

  const loadClub = async () => {
    if (!clubId) return

    const response = await clubsApi.getClub(clubId)

    if (response.ok && response?.data) {
      setClub(response.data)
    }
  }

  useEffect(() => {
    loadClub()
  }, [])

  if (!club) return null

  return (
    <SC.ClubPageLayout title="Club" color="background">
      <Header />
      <ClubHeader />
      <Gallery gallery={club.gallery} />
    </SC.ClubPageLayout>
  )
}

export default ClubPage
