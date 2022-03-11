import React, { FC } from "react"

import { ITeam } from "../../types"
import * as SC from "./styles"
import { joinWithCommas } from "../../utils"

const TeamCard: FC<ITeam> = ({ sport, levels, genders }) => (
  <SC.CardWrapper>
    <SC.Title>{sport}</SC.Title>
    <SC.Subtitle>{joinWithCommas(levels)}</SC.Subtitle>
    <SC.Subtitle>{joinWithCommas(genders)}</SC.Subtitle>
  </SC.CardWrapper>
)

export default TeamCard
