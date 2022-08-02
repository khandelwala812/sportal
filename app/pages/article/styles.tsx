import styled from "styled-components/native"
import PageLayout from "../../layouts/PageLayout"
import Text from "../../components/Text"

import colors from "../../config/colors"

export const ArticlePageLayout = styled(PageLayout)`
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`

export const Image = styled.Image`
  width: 50vw;
  height: 100px;
`

export const ContentWrapper = styled.View`
  background: #dde5f0;
  width: 50vw;
  flex: 1;
  padding: 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`

export const Content = styled(Text)``
