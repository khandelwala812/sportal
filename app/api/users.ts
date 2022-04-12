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

const flipStatus = (userId: string, eventId: string, waitlisted: boolean) => {
  return client.put(`${route}/events/flip-status`, {
    data: {
      userId,
      eventId,
      newStatus: waitlisted ? "registered" : "waitlisted"
    }
  })
}

export default {
  getEvents,
  registerEvent,
  unregisterEvent,
  flipStatus
}
