import { ICalendar, IEvent } from "../types"
import client from "./client"

const route = "/events"

const getCalendar = () => {
  return client.get<ICalendar>(route)
}

const addEvent = (event: IEvent) => {
  return client.post(`${route}/add-event`, {
    data: event
  })
}

const editEvent = (updatedEvent: IEvent) => {
  return client.patch(`${route}/edit-event`, {
    data: updatedEvent
  })
}

export default {
  getCalendar,
  addEvent,
  editEvent
}
