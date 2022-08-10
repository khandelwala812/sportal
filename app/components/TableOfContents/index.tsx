import { useNavigation } from "@react-navigation/native"
import React, { FC } from "react"
import { Pressable } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import routes from "../../config/routes"

import * as SC from "./styles"

interface IContent {
  name: string
  alternateName?: string
}

interface ITableOfContentsProps {
  contents?: IContent[]
}

const menuItemRoutes = {
  "About Us": {
    "Who We Are": routes.WHO_WE_ARE,
    "Mission Statement": routes.MISSION_STATEMENT
  }
} as {
  [key: string]: {
    [key: string]: string
  }
}

const TableOfContents: FC<ITableOfContentsProps> = ({ contents }) => {
  const navigation = useNavigation()

  const navigateTo = (route: string) => () => {
    navigation.navigate(route)
  }

  return (
    <SC.TOCWrapper>
      <SC.Line />
      <FlatList
        data={contents}
        keyExtractor={(_, i) => `#${i}`}
        renderItem={({ item }) => {
          const content = item as IContent

          return (
            <Pressable
              onPress={navigateTo(menuItemRoutes["About Us"][content.name])}
            >
              <SC.TOCText>{content.name}</SC.TOCText>
            </Pressable>
          )
        }}
      />
    </SC.TOCWrapper>
  )
}

export default TableOfContents
