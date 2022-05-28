import React, { FC } from "react"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import useModal from "../../hooks/useModal"
import colors from "../../config/colors"
import modals from "../../config/modals"

interface IHeaderProps {
  title: string
  to?: string
  // isModal?: boolean
  color?: string
  isActive: boolean
  setCurrentPage?: (page: string) => void
}

const HeaderLink: FC<IHeaderProps> = ({
  title,
  to,
  // isModal,
  color,
  isActive,
  setCurrentPage
}) => {
  const { toggleModal } = useModal()
  const navigation = useNavigation()

  const navigateTo = () => {
    if (!isActive) {
      navigation.navigate(to)
      setCurrentPage?.(to)
    }

    toggleModal(modals.NAV_BAR)

    // if (!to) return

    // if (isModal) {
    //   toggleModal(to)
    // } else {
    //   navigation.navigate(to)
    // }
  }

  return (
    <SC.LinkWrapper
      style={{ backgroundColor: isActive && colors.light }}
      onPress={navigateTo}
    >
      <SC.Title style={{ color: color && colors[color] }}>{title}</SC.Title>
    </SC.LinkWrapper>
  )
}

export default HeaderLink
