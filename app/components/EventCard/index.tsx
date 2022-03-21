import React, { FC } from "react"

import * as SC from "./styles"
import { IEvent } from "../../types"

const EventCard: FC<IEvent> = ({ name, startTime, endTime }) => {
  const formatTime = () => {
    if (sameMeridiem(startTime, endTime)) {
      return `${startTime}-${endTime + startTime.meridiem}`
    }
    
    return `${startTime + startTime.meridiem}-${endTime + endTime.meridiem}`
  }
  
  return (
    <SC.CardWrapper>
      <SC.Title>{name}</SC.Title>
      <SC.Subtitle>{formatTime()}</SC.Subtitle>
    </SC.CardWrapper>
  )
}

export default EventCard
