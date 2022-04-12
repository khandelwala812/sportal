import React, { FC } from "react"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import useModal from "../../hooks/useModal"
import colors from "../../config/colors"

interface IHeaderProps {
  title: string
  to?: string
  isModal?: boolean
  color?: string
}

const HeaderLink: FC<IHeaderProps> = ({ title, to, isModal, color }) => {
  const { toggleModal } = useModal()
  const navigation = useNavigation()

  const navigateTo = () => {
    if (!to) return

    if (isModal) {
      toggleModal(to)
    } else {
      navigation.navigate(to)
    }
  }

  return (
    <SC.LinkWrapper onPress={navigateTo}>
      <SC.Title style={{ color: color && colors[color] }}>{title}</SC.Title>
    </SC.LinkWrapper>
  )
}

export default HeaderLink
