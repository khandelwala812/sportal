import React, { FC } from "react"
import { FlatList, Pressable, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Hoverable } from "react-native-web-hover"

import * as SC from "./styles"
import colors from "../../config/colors"

interface IMenuItem {
  name: string
  route?: string
}

interface IHeaderItemProps {
  title: string
  route?: string
  menuItems?: IMenuItem[]
  lightMode?: boolean
}

const HeaderItem: FC<IHeaderItemProps> = ({
  title,
  route,
  menuItems,
  lightMode
}) => {
  const navigation = useNavigation()
  const themeColor = lightMode ? colors.white : colors.black

  const navigateTo = () => {
    if (route) navigation.navigate(route)
  }

  return (
    <Hoverable>
      {({ hovered }) => (
        <SC.Wrapper onPress={navigateTo}>
          <SC.TitleWrapper>
            <SC.HeaderText
              style={{ color: hovered ? colors.medium : themeColor }}
            >
              {title}
            </SC.HeaderText>
            {menuItems && (
              <SC.Chevron
                name="chevron-down"
                size={30}
                color={hovered ? colors.medium : themeColor}
              />
            )}
          </SC.TitleWrapper>
          {menuItems && hovered && (
            <SC.Dropdown>
              <FlatList
                data={menuItems}
                keyExtractor={(_, i) => `#${i}`}
                ItemSeparatorComponent={() => <SC.Separator />}
                renderItem={({ item }) => {
                  const menuItem = item as IMenuItem

                  return (
                    <Pressable>
                      <SC.Subheading numberOfLines={1}>
                        {menuItem.name}
                      </SC.Subheading>
                    </Pressable>
                  )
                }}
              />
            </SC.Dropdown>
          )}
        </SC.Wrapper>
      )}
    </Hoverable>
  )
}

export default HeaderItem
