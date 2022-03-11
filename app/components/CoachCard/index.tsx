import React, { FC } from "react"

import { ICoach } from "../../types"
import * as SC from "./styles"

const CoachCard: FC<ICoach> = ({ name, description, image }) => (
  <SC.CardWrapper>
    <SC.Image source={require(`../../assets/${image ?? "no-image.png"}`)} />
    <SC.TextWrapper>
      <SC.Title>{name}</SC.Title>
      {description && <SC.Subtitle>{description}</SC.Subtitle>}
    </SC.TextWrapper>
  </SC.CardWrapper>
)

export default CoachCard
