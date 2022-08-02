import React, { FC } from "react"
import PageLayout from "../PageLayout"

import * as SC from "./styles"

interface ISilhouetteLayoutProps {
  title: string
  header?: boolean
  style?: object
}

const SilhouetteLayout: FC<ISilhouetteLayoutProps> = ({
  title,
  header,
  style,
  children,
  ...props
}) => {
  return (
    <PageLayout title={title} header={header} style={style} {...props}>
      <SC.Silhouette />
      {children}
      <SC.Filler />
    </PageLayout>
  )
}

export default SilhouetteLayout
