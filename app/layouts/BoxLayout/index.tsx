import React, { FC } from "react"

import * as SC from "./styles"
import Form from "../../components/Form"

interface IBoxLayoutProps {
  title: string
  head?: React.ReactNode
  isForm?: boolean
}

const BoxLayout: FC<IBoxLayoutProps> = ({
  title,
  head,
  isForm,
  children,
  ...props
}) => {
  return (
    <SC.PageLayout title={title} color="background">
      <SC.Box color="foreground">
        {head}
        {isForm ? <Form {...props}>{children}</Form> : children}
      </SC.Box>
    </SC.PageLayout>
  )
}

export default BoxLayout
