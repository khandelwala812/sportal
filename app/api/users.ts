import { IUserEvent } from "../types"
import client from "./client"

const route = "/users"

const getEvents = (userId?: string) => {
  return client.get<IUserEvent[]>(`${route}/events/${userId}`)
}

export default {
  getEvents
}
