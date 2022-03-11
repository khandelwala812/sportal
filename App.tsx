import React, { FC } from "react"

import AppNavigator from "./app/navigation/AppNavigator"
import { AuthProvider } from "./app/AuthProvider"
import { ModalProvider } from "./app/ModalProvider"
import { FiltersProvider } from "./app/FiltersProvider"

const App: FC = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <FiltersProvider>
          <AppNavigator />
        </FiltersProvider>
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
