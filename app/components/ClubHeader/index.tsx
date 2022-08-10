import React, { FC } from "react"
import { FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import { IClubContent } from "../../types"
import routes from "../../config/routes"
import HeaderItem from "../HeaderItem"
import useClub from "../../hooks/useClub"

interface IClubHeaderProps {
  lightMode?: boolean
}

const headerRoutes = {
  "About Us": routes.WHO_WE_ARE,
  Programs: routes.BOYS_PROGRAMS,
  Tryouts: routes.TRYOUTS,
  "Our Team": routes.OUR_TEAM,
  Events: routes.CLUB_EVENTS
} as {
  [key: string]: string
}

const ClubHeader: FC<IClubHeaderProps> = ({ lightMode }) => {
  const navigation = useNavigation()
  const { club } = useClub()

  const navigateToHome = () => {
    navigation.navigate(routes.CLUB)
  }

  return (
    <SC.HeaderWrapper>
      <SC.LogoWrapper onPress={navigateToHome}>
        <SC.Logo
          source={require(`../../assets/${club?.logo ?? "infinite-logo.png"}`)}
        />
      </SC.LogoWrapper>
      <SC.ListWrapper>
        {club?.content.map(headerItem => (
          <HeaderItem
            title={headerItem.alternateName ?? headerItem.heading}
            route={headerRoutes[headerItem.heading]}
            menuItems={headerItem.menuItems}
            lightMode={lightMode}
          />
        ))}
      </SC.ListWrapper>
    </SC.HeaderWrapper>
  )
}

export default ClubHeader
