import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import routes from "../config/routes"
import LoginPage from "../pages/login"
import RegisterPage from "../pages/register"
import ForgotPasswordPage from "../pages/forgot-password"
import ResetPasswordPage from "../pages/reset-password"
import ValidateCodePage from "../pages/validate-code"

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.LOGIN} component={LoginPage} />
      <Stack.Screen name={routes.REGISTER} component={RegisterPage} />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPasswordPage}
      />
      <Stack.Screen
        name={routes.RESET_PASSWORD}
        component={ResetPasswordPage}
      />
      <Stack.Screen name={routes.VALIDATE_CODE} component={ValidateCodePage} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
