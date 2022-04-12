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
  const { name, location, description, startTime, endTime } = event

  const handleEdit = () => {
    setEditedEvent(event)
  }

  return (
    <SC.CardWrapper>
      <SC.Title>{name}</SC.Title>
      {/* {startTime && endTime && <SC.Subtitle>{formatTime()}</SC.Subtitle>} */}
      <SC.LocationWrapper>
        <SC.Marker name="location-pin" size={20} color="black" />
        <SC.Location>{location}</SC.Location>
      </SC.LocationWrapper>
      <SC.Subtitle>
        {startTime}-{endTime} PM
      </SC.Subtitle>
      <SC.Description>{description}</SC.Description>
      <SC.EditButton color="background" onPress={handleEdit}>
        <SC.Pencil name="pencil" size={24} color="black" />
      </SC.EditButton>
    </SC.CardWrapper>
  )
}

export default EventCard
