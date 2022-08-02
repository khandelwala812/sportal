import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import useAuth from "../hooks/useAuth"
import routes from "../config/routes"
import AuthNavigator from "./AuthNavigator"
import ClubNavigator from "./ClubNavigator"
import EventsPage from "../pages/events"
import IndexPage from "../pages/opening"
import NavBar from "../components/NavBar"
import VideosPage from "../pages/videos"
import ArticlesNavigator from "./ArticlesNavigator"
import PlatformAdminOrUserPage from "../pages/platform-admin-or-user"
import PlatformAdminPage from "../pages/platform-admin"
import ReviewVideoPage from "../pages/review-video"

const noHeaderOptions = { headerShown: false }

const noDrawerOptions = { drawerItemStyle: { height: 0, margin: 0 } }

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
          component={ArticlesNavigator}
          options={{ ...noHeaderOptions, drawerLabel: "Enhancement Articles" }}
        />
        <Drawer.Screen
          name={routes.AUTH}
          component={AuthNavigator}
          options={{ ...noHeaderOptions, ...noDrawerOptions }}
        />
        <Drawer.Screen
          name={routes.PLATFORM_ADMIN_OR_USER}
          component={PlatformAdminOrUserPage}
          options={{ ...noHeaderOptions, ...noDrawerOptions }}
        />
        <Drawer.Screen
          name={routes.PLATFORM_ADMIN}
          component={PlatformAdminPage}
          options={{ ...noHeaderOptions, ...noDrawerOptions }}
        />
        <Drawer.Screen
          name={routes.REVIEW_VIDEO}
          component={ReviewVideoPage}
          options={{ ...noHeaderOptions, ...noDrawerOptions }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
