import styled from "styled-components/native"
import PageLayout from "../../layouts/PageLayout"

import colors from "../../config/colors"

export const ClubPageLayout = styled(PageLayout)`
  background-color: ${colors.background};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
