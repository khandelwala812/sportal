import React, { FC } from "react"
import Toast from "react-native-toast-message"

import AppNavigator from "./app/navigation/AppNavigator"
import { AuthProvider } from "./app/AuthProvider"
import { ClubProvider } from "./app/ClubProvider"
import { FiltersProvider } from "./app/FiltersProvider"
import { ModalProvider } from "./app/ModalProvider"
import toastConfig from "./app/config/toast"

const App: FC = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <FiltersProvider>
          <ClubProvider>
            <AppNavigator />
            <Toast config={toastConfig} />
          </ClubProvider>
        </FiltersProvider>
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
