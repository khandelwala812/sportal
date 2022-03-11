import React, { FC } from "react"

import * as SC from "./styles"

interface ISectionProps {
  title: string
  content?: string
}

const Section: FC<ISectionProps> = ({ title, content, children, ...props }) => (
  <SC.SectionWrapper {...props}>
    <SC.Title>{title}</SC.Title>
    {content && <SC.Body>{content}</SC.Body>}
    {children}
  </SC.SectionWrapper>
)

export default Section
