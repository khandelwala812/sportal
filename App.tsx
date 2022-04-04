import React, { FC } from "react"
import Toast from "react-native-toast-message"

import AppNavigator from "./app/navigation/AppNavigator"
import { AuthProvider } from "./app/AuthProvider"
import { FiltersProvider } from "./app/FiltersProvider"
import { ModalProvider } from "./app/ModalProvider"
import toastConfig from "./app/config/toast"

const App: FC = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <FiltersProvider>
          <AppNavigator />
          <Toast config={toastConfig} />
        </FiltersProvider>
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
