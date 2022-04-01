import { IUserEvent } from "../types"
import client from "./client"

const route = "/users"

const getEvents = (userId: string) => {
  return client.get<IUserEvent[]>(`${route}/events/${userId}`)
}

const registerEvent = (userId: string, eventId: string) => {
  return client.post(`${route}/register-event`, {
    data: { userId, eventId }
  })
}

const unregisterEvent = (userId: string, eventId: string) => {
  return client.put(`${route}/unregister-event`, {
    data: { userId, eventId }
  })
}

export default {
  getEvents,
  registerEvent,
  unregisterEvent
}
