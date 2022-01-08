import React, { FC } from "react"

import AppNavigator from "./app/navigation/AppNavigator"
import { ModalProvider } from "./app/ModalProvider"

const App: FC = () => {
  return (
    <ModalProvider>
      <AppNavigator />
    </ModalProvider>
  )
}

export default App
