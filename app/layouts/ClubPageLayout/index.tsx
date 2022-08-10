import React, { FC } from "react"

import * as SC from "./styles"
import useClub from "../../hooks/useClub"
import ClubHeader from "../../components/ClubHeader"
import Header from "../../components/Header"
import TableOfContents from "../../components/TableOfContents"

interface IClubPageLayoutProps {
  heading: string
  subHeading?: string
}

const ClubPageLayout: FC<IClubPageLayoutProps> = ({ heading, subHeading }) => {
  const { club } = useClub()
  const headerItem = club?.content.find(block => block.heading === heading)
  const contentBlock = headerItem?.menuItems?.find(
    menuItem => menuItem.name === subHeading
  )

  if (!club) return null

  return (
    <SC.ClubPageLayout title={subHeading ?? heading} color="background">
      <Header />
      <ClubHeader />
      <SC.PageContainer>
        <SC.Spacer />
        <SC.ContentWrapper>
          <SC.Heading>{subHeading ?? heading}</SC.Heading>
          <SC.Paragraph>
            {contentBlock?.content ?? headerItem?.content}
          </SC.Paragraph>
        </SC.ContentWrapper>
        <SC.Spacer>
          {headerItem?.menuItems && (
            <TableOfContents
              contents={headerItem.menuItems.map(menuItem => ({
                ...menuItem,
                heading
              }))}
            />
          )}
        </SC.Spacer>
      </SC.PageContainer>
    </SC.ClubPageLayout>
  )
}

export default ClubPageLayout
