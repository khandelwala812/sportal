import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import routes from "../config/routes"
import ClubEventsPage from "../pages/club-events"
import ClubPage from "../pages/club"
import FindAClubPage from "../pages/find-a-club"
import HomePage from "../pages/home"
import MissionStatementPage from "../pages/mission-statement"
import OurTeamPage from "../pages/our-team"
import TryoutsPage from "../pages/tryouts"
import WhoWeArePage from "../pages/who-we-are"

const Stack = createNativeStackNavigator()

const ClubNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.FIND_A_CLUB}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.FIND_A_CLUB} component={FindAClubPage} />
      <Stack.Screen name={routes.HOME} component={HomePage} />
      <Stack.Screen name={routes.CLUB} component={ClubPage} />
      <Stack.Screen name={routes.WHO_WE_ARE} component={WhoWeArePage} />
      <Stack.Screen
        name={routes.MISSION_STATEMENT}
        component={MissionStatementPage}
      />
      <Stack.Screen name={routes.TRYOUTS} component={TryoutsPage} />
      <Stack.Screen name={routes.OUR_TEAM} component={OurTeamPage} />
      <Stack.Screen name={routes.CLUB_EVENTS} component={ClubEventsPage} />
    </Stack.Navigator>
  )
}

export default ClubNavigator
