import React, { FC } from "react"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import useModal from "../../hooks/useModal"

interface IHeaderProps {
  title: string
  to?: string
  isModal?: boolean
}

const HeaderLink: FC<IHeaderProps> = ({ title, to, isModal }) => {
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
      <SC.Title>{title}</SC.Title>
    </SC.LinkWrapper>
  )
}

export default HeaderLink
