import React, { FC } from "react"

import * as SC from "./styles"
import { IEvent } from "../../types"

const EventCard: FC<IEvent> = ({ name }) => {
  return (
    <SC.CardWrapper>
      <SC.Title>{name}</SC.Title>
    </SC.CardWrapper>
  )
}

export default EventCard
