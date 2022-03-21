import { ICalendar, IEvent } from "../types"
import client from "./client"

const getCalendar = () => {
  return client.get<ICalendar>("/events")
}

const addEvent = (event: IEvent) => {
  return client.post("/events/add-event", {
    data: event
  })
}

export default {
  getCalendar,
  addEvent
}
