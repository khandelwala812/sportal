import React, { FC } from "react"

import * as SC from "./styles"
import useClub from "../../hooks/useClub"
import routes from "../../config/routes"
import ClubHeader from "../../components/ClubHeader"
import Header from "../../components/Header"
import TableOfContents from "../../components/TableOfContents"

const WhoWeArePage: FC = () => {
  const { club } = useClub()
  const headerItem = club?.content.find(block => block.heading === "About Us")
  const contentBlock = headerItem?.menuItems?.find(
    menuItem => menuItem.name === "Who We Are"
  )

  if (!club) return null

  return (
    <SC.WhoWeArePageLayout title="About Us" color="background">
      <Header />
      <ClubHeader />
      <SC.PageContainer>
        <SC.Spacer />
        <SC.ContentWrapper>
          <SC.Heading>Who We Are</SC.Heading>
          <SC.Paragraph>{contentBlock?.content}</SC.Paragraph>
        </SC.ContentWrapper>
        <TableOfContents contents={headerItem?.menuItems} />
      </SC.PageContainer>
    </SC.WhoWeArePageLayout>
  )
}

export default WhoWeArePage
