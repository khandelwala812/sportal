import React, { FC, Fragment } from "react"

import * as SC from "./styles"
import Header from "../../components/Header"
import SEO from "../../components/SEO"

interface IPageLayoutProps {
  title: string
  style?: object
  header?: boolean
}

const PageLayout: FC<IPageLayoutProps> = ({
  title,
  style,
  header = true,
  children,
  ...props
}) => {
  return (
    <Fragment>
      <SEO title={title} />
      <SC.PageContainer style={style} {...props}>
        {header && <Header />}
        {children}
      </SC.PageContainer>
    </Fragment>
  )
}

export default PageLayout
