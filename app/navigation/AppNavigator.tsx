import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import useAuth from "../hooks/useAuth"
import routes from "../config/routes"
import ClubPage from "../pages/club"
import ForgotPasswordPage from "../pages/forgot-password"
import Header from "../components/Header"
import HomePage from "../pages/home"
import IndexPage from "../pages/opening"
import LoginPage from "../pages/login"
import PlatformAdminOrUserPage from "../pages/platform-admin-or-user"
import RegisterPage from "../pages/register"
import ResetPasswordPage from "../pages/reset-password"
import ValidateCodePage from "../pages/validate-code"
import PlatformAdminPage from "../pages/platform-admin"
import EventsPage from "../pages/events"
import VideosPage from "../pages/videos"

const headerOptions = {
  header: (props: any) => <Header {...props} />
}
const noHeaderOptions = { headerShown: false }

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  const { user } = useAuth()
  const landingPage = user?.isPlatformAdmin
    ? routes.PLATFORM_ADMIN
    : routes.OPENING

  return (
    <NavigationContainer linking={{ prefixes: [], enabled: true }}>
      <Stack.Navigator initialRouteName={landingPage}>
        <Stack.Screen
          name={routes.OPENING}
          component={IndexPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.LOGIN}
          component={LoginPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.PLATFORM_ADMIN_OR_USER}
          component={PlatformAdminOrUserPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.PLATFORM_ADMIN}
          component={PlatformAdminPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.REGISTER}
          component={RegisterPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.FORGOT_PASSWORD}
          component={ForgotPasswordPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.RESET_PASSWORD}
          component={ResetPasswordPage}
          options={noHeaderOptions}
        />
        <Stack.Screen
          name={routes.VALIDATE_CODE}
          component={ValidateCodePage}
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
        <Stack.Screen
          name={routes.EVENTS}
          component={EventsPage}
          options={headerOptions}
        />
        <Stack.Screen
          name={routes.VIDEOS}
          component={VideosPage}
          options={headerOptions}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
