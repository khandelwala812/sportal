import styled from "styled-components/native"
import PageLayout from "../../layouts/PageLayout"
import Text from "../../components/Text"

import colors from "../../config/colors"

export const MissionStatementPageLayout = styled(PageLayout)`
  background-color: ${colors.background};
  height: 100vh;
  align-items: center;
  flex: 1;
  padding-top: 120px;
`

export const PageContainer = styled.View`
  flex-direction: row;
`

export const Spacer = styled.View`
  width: 18%;
`

export const ContentWrapper = styled.View`
  width: 65%;
  flex-direction: column;
  margin-right: 32px;
`

export const Heading = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`

export const Paragraph = styled(Text)`
  font-size: 16px;
  margin-bottom: 16px;
`
