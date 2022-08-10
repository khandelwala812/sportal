import React, { FC } from "react"

import * as SC from "./styles"
import useClub from "../../hooks/useClub"
import ClubHeader from "../../components/ClubHeader"
import Header from "../../components/Header"
import TableOfContents from "../../components/TableOfContents"

const MissionStatementPage: FC = () => {
  const { club } = useClub()
  const headerItem = club?.content.find(block => block.heading === "About Us")
  const contentBlock = headerItem?.menuItems?.find(
    menuItem => menuItem.name === "Mission Statement"
  )

  if (!club) return null

  return (
    <SC.MissionStatementPageLayout title="Mission Statement" color="background">
      <Header />
      <ClubHeader />
      <SC.PageContainer>
        <SC.Spacer />
        <SC.ContentWrapper>
          <SC.Heading>Mission Statement</SC.Heading>
          <SC.Paragraph>{contentBlock?.content}</SC.Paragraph>
        </SC.ContentWrapper>
        <TableOfContents contents={headerItem?.menuItems} />
      </SC.PageContainer>
    </SC.MissionStatementPageLayout>
  )
}

export default MissionStatementPage
