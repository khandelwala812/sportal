import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import routes from "../config/routes"
import ClubPage from "../pages/club"
import HomePage from "../pages/home"
import FindAClubPage from "../pages/find-a-club"

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
    </Stack.Navigator>
  )
}

export default ClubNavigator
