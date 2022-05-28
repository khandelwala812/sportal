// import React, { FC, useRef, useState } from "react"
// import { TouchableOpacity } from "react-native"
// import { useNavigation } from "@react-navigation/native"

// import useAuth from "../../hooks/useAuth"
// import * as SC from "./styles"
// import routes from "../../config/routes"
// import { ProfileIcon } from "../Header/styles"
// import useOutsideClicked from "../../hooks/useOutsideClicked"

// interface INavBarProps {
//   darkTheme?: boolean
// }

// const NavBar: FC<INavBarProps> = ({ darkTheme }) => {
//   const { user, setUser } = useAuth()
//   const navigation = useNavigation()
//   const floatRef = useRef(null)
//   const clickedOutside = useOutsideClicked(floatRef)
//   const [floatVisible, setFloatVisible] = useState<boolean>(false)

//   const handleSelect = () => {
//     if (!user) {
//       return navigation.navigate(routes.LOGIN)
//     }

//     setFloatVisible(visible => !visible)
//   }

//   const signOut = () => {
//     setUser(null)
//     setFloatVisible(false)
//     navigation.navigate(routes.OPENING)
//   }

//   return (
//     <TouchableOpacity ref={floatRef} onPress={handleSelect}>
//       <ProfileIcon
//         name="account-circle"
//         size={40}
//         color={darkTheme ? "white" : "black"}
//       />
//       {floatVisible && !clickedOutside && (
//         <SC.Float>
//           <TouchableOpacity onPress={signOut}>
//             <SC.FloatText>Sign out</SC.FloatText>
//           </TouchableOpacity>
//         </SC.Float>
//       )}
//     </TouchableOpacity>
//   )
// }

// export default NavBar

import React, { useState, useContext, useEffect, Fragment, FC } from "react"
import { FlatList, Linking, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
// import AuthContext from "../../auth/context"
import useAuth from "../../hooks/useAuth"
import useModal from "../../hooks/useModal"
import colors from "../../config/colors"
import modals from "../../config/modals"
import routes from "../../config/routes"
import HeaderLink from "../HeaderLink"
import ModalLayout from "../../layouts/ModalLayout"
// import { ctx, signOut } from "../../config/Globals"
// import NavLink from "../NavLink"

const pages = [
  { title: "Opening", to: routes.OPENING },
  { title: "Events", to: routes.EVENTS },
  { title: "Videos", to: routes.VIDEOS }
]

interface ISidebarProps {
  initialUrl?: string
  darkTheme?: boolean
}

const Sidebar: FC<ISidebarProps> = ({ initialUrl, darkTheme }) => {
  const { setUser } = useAuth()
  const { toggleModal } = useModal()
  const [currentPage, setCurrentPage] = useState(initialUrl)
  const navigation = useNavigation()

  const toggleSidebar = () => {
    toggleModal(modals.NAV_BAR)
  }

  const handleSignOut = async () => {
    toggleSidebar()
    navigation.navigate(routes.OPENING)
    setUser(null)
  }

  return (
    <Fragment>
      <TouchableOpacity onPress={toggleSidebar}>
        <MaterialCommunityIcons
          name="menu"
          color={darkTheme ? colors.white : colors.black}
          size={40}
        />
      </TouchableOpacity>
      <ModalLayout
        name={modals.NAV_BAR}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        style={{ margin: 0 }}
      >
        <SC.SidebarWrapper>
          <FlatList
            data={pages}
            keyExtractor={page => page.title}
            renderItem={({ item: page }) => {
              const isActive = page.to === currentPage
              console.log(currentPage)
              return (
                <HeaderLink
                  title={page.title}
                  to={page.to}
                  isActive={isActive}
                  setCurrentPage={setCurrentPage}
                />
              )
            }}
          />
        </SC.SidebarWrapper>
      </ModalLayout>
    </Fragment>
  )
}

export default Sidebar
