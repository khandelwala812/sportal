import React, { FC, Fragment } from "react"

import * as SC from "./styles"
import modals from "../../config/modals"
import HeaderLink from "../HeaderLink"

interface IHeaderProps {
  opening?: boolean
}

const Header: FC<IHeaderProps> = ({ opening }) => {
  return (
    <SC.HeaderWrapper>
      <SC.Logo source={require("../../assets/logo.png")} />
      <SC.ProfileWrapper>
        {opening ? (
          <Fragment>
            <HeaderLink title="Find a Club" to={modals.SEARCH} isModal />
            <HeaderLink title="Nutritional Advice" />
            <HeaderLink title="Interviews" />
          </Fragment>
        ) : (
          <Fragment>
            <HeaderLink title="My Clubs" />
            <HeaderLink title="Messages" />
            <SC.ProfileIcon name="account-circle" size={40} color="white" />
          </Fragment>
        )}
      </SC.ProfileWrapper>
    </SC.HeaderWrapper>
  )
}

export default Header
