import { IUserEvent } from "../types"
import client from "./client"

const route = "/users"

const getEvents = (userId: string) => {
  return client.get<IUserEvent[]>(`${route}/events/${userId}`)
}

const registerForEvent = (userId: string, eventId: string) => {
  return client.post(`${route}/register-event`, {
    data: { userId, eventId }
  })
}

export default {
  getEvents,
  registerForEvent
}
