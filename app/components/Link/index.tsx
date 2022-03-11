import React, { FC } from "react"
import { Linking } from "react-native"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"

interface ILinkProps {
  url: string
  displayText?: string
  external?: boolean
  icon?: boolean
}

const Link: FC<ILinkProps> = ({
  url,
  displayText,
  external = false,
  icon,
  ...props
}) => {
  const navigation = useNavigation()

  const openUrl = () => {
    if (external) {
      return Linking.openURL(url)
    }

    navigation.navigate(url)
  }

  return (
    <SC.LinkWrapper onPress={openUrl} {...props}>
      {icon && <SC.LinkIcon name="link-variant" size={24} color="white" />}
      <SC.LinkText>{displayText ?? url}</SC.LinkText>
    </SC.LinkWrapper>
  )
}

export default Link
