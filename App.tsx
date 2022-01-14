import React, { FC } from "react"

import AppNavigator from "./app/navigation/AppNavigator"
import { FiltersProvider } from "./app/FiltersProvider"
import { ModalProvider } from "./app/ModalProvider"

const App: FC = () => {
  return (
    <FiltersProvider>
      <ModalProvider>
        <AppNavigator />
      </ModalProvider>
    </FiltersProvider>
  )
}

export default App
