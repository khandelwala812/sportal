import React, { FC } from "react"

import * as SC from "./styles"
import { IEvent } from "../../types"

interface IEventCardProps {
  event: IEvent
  setEditedEvent: (event: IEvent) => void
}

const EventCard: FC<IEventCardProps> = ({ event, setEditedEvent }) => {
  // const formatTime = () => {
  //   if (startTime.meridiem === endTime.meridiem) {
  //     return `${startTime}-${endTime + startTime.meridiem}`
  //   }

  //   return `${startTime + startTime.meridiem} - ${endTime + endTime.meridiem}`
  // }
  const { name } = event

  const handleEdit = () => {
    setEditedEvent(event)
  }

  return (
    <SC.CardWrapper>
      <SC.Title>{name}</SC.Title>
      {/* {startTime && endTime && <SC.Subtitle>{formatTime()}</SC.Subtitle>} */}
      <SC.EditButton color="white" onPress={handleEdit}>
        <SC.Pencil name="pencil" size={24} color="black" />
      </SC.EditButton>
    </SC.CardWrapper>
  )
}

export default EventCard
