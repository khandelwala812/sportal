import React, { FC } from "react"

import * as SC from "./styles"

const IndexPage: FC = () => (
  <SC.PageContainer>
    <SC.SearchContainer color="light">
      <SC.SearchButton title="Search" color="medium" />
    </SC.SearchContainer>
  </SC.PageContainer>
)

export default IndexPage
