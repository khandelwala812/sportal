import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import routes from "../config/routes"
import ClubPage from "../pages/club"
import Header from "../components/Header"
import HomePage from "../pages/home"
import IndexPage from "../pages/opening"

const headerOptions = {
  header: (props: any) => <Header {...props} />
}
const noHeaderOptions = { headerShown: false }

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer linking={{ prefixes: [], enabled: true }}>
      <Stack.Navigator initialRouteName={routes.OPENING}>
        <Stack.Screen
          name={routes.OPENING}
          component={IndexPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.HOME}
          component={HomePage}
          options={headerOptions}
        />
        <Stack.Screen
          name={routes.CLUB}
          component={ClubPage}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
