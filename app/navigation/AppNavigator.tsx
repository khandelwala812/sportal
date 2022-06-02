import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import useAuth from "../hooks/useAuth"
import routes from "../config/routes"
import ArticlesPage from "../pages/articles"
import AuthNavigator from "./AuthNavigator"
import ClubNavigator from "./ClubNavigator"
import EventsPage from "../pages/events"
import IndexPage from "../pages/opening"
import NavBar from "../components/NavBar"
import VideosPage from "../pages/videos"

const noHeaderOptions = { headerShown: false }

const Drawer = createDrawerNavigator()

const AppNavigator = () => {
  const { user, setUser } = useAuth()
  const landingPage = user?.isPlatformAdmin
    ? routes.PLATFORM_ADMIN
    : routes.OPENING

  return (
    <NavigationContainer linking={{ prefixes: [], enabled: true }}>
      <Drawer.Navigator
        initialRouteName={landingPage}
        drawerContent={props => (
          <NavBar user={user} setUser={setUser} {...props} />
        )}
      >
        <Drawer.Screen
          name={routes.OPENING}
          component={IndexPage}
          options={{ ...noHeaderOptions, drawerLabel: "Home" }}
        />
        <Drawer.Screen
          name={routes.BROWSE}
          component={ClubNavigator}
          options={{ ...noHeaderOptions, drawerLabel: "Browse Clubs" }}
        />
        <Drawer.Screen
          name={routes.EVENTS}
          component={EventsPage}
          options={{
            ...noHeaderOptions,
            drawerLabel: "Top Trainer Interviews"
          }}
        />
        <Drawer.Screen
          name={routes.VIDEOS}
          component={VideosPage}
          options={{ ...noHeaderOptions, drawerLabel: "Daily Highlights" }}
        />
        <Drawer.Screen
          name={routes.ARTICLES}
          component={ArticlesPage}
          options={{ ...noHeaderOptions, drawerLabel: "Enhancement Articles" }}
        />
        <Drawer.Screen
          name={routes.AUTH}
          component={AuthNavigator}
          options={{ ...noHeaderOptions, drawerItemStyle: { height: 0 } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
