import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import routes from "../config/routes"
import ArticlePage from "../pages/article"
import ArticlesPage from "../pages/articles"

const Stack = createNativeStackNavigator()

const ArticlesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.BROWSE_ARTICLES}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.BROWSE_ARTICLES} component={ArticlesPage} />
      <Stack.Screen name={routes.READ_ARTICLE} component={ArticlePage} />
    </Stack.Navigator>
  )
}

export default ArticlesNavigator
