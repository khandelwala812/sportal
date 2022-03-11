import React, { FC } from "react"

import * as SC from "./styles"
import BoxLayout from "../../layouts/BoxLayout"
import Placard from "../../components/Placard"
import routes from "../../config/routes"

const PlatformAdminOrUserPage: FC = () => {
  return (
    <BoxLayout title="Platform Admin or User">
      <SC.Title>Login as</SC.Title>
      <Placard title="Platform Admin" to={routes.PLATFORM_ADMIN} />
      <Placard title="User" to={routes.OPENING} />
    </BoxLayout>
  )
}

export default PlatformAdminOrUserPage
