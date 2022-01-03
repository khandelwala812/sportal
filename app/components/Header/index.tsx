import React, { FC } from "react"

import * as SC from "./styles"

const Header: FC = () => {
  return (
    <SC.HeaderWrapper>
      <SC.Logo source={require("../../assets/logo.png")} />
      <SC.ProfileWrapper>
        <SC.HeaderText>My Clubs</SC.HeaderText>
        <SC.HeaderText>Messages</SC.HeaderText>
        <SC.ProfileIcon name="account-circle" size={40} color="black" />
      </SC.ProfileWrapper>
    </SC.HeaderWrapper>
  )
}

export default Header
