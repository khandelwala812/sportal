import React, { FC } from "react"

import * as SC from "./styles"
import { IEvent } from "../../types"

interface IEventCardProps extends IEvent {
  setEditing: () => void
}

const EventCard: FC<IEventCardProps> = ({ name, startTime, endTime, setEditing }) => {
  const formatTime = () => {
    if (sameMeridiem(startTime, endTime)) {
      return `${startTime}-${endTime + startTime.meridiem}`
    }
    
    return `${startTime + startTime.meridiem} - ${endTime + endTime.meridiem}`
  }
  
  const handlePress = () => {
    setEditing(true)
  }
  
  return (
    <SC.CardWrapper>
      <SC.Title>{name}</SC.Title>
      <SC.Subtitle>{formatTime()}</SC.Subtitle>
      <SC.EditButton onPress={handlePress}>
        <SC.Pencil name="pencil" size={24} color="black" />
      </SC.EditButton>
    </SC.CardWrapper>
  )
}

export default EventCard
