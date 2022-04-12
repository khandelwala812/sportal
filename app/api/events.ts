import { ICalendar, IEvent, IUser } from "../types"
import client from "./client"

const route = "/events"

const getCalendar = () => {
  return client.get<ICalendar>(route)
}

const addEvent = (event: any) => {
  return client.post<IEvent>(`${route}/add-event`, {
    data: event
  })
}

const editEvent = (updatedEvent: IEvent) => {
  return client.patch(`${route}/edit-event`, {
    data: updatedEvent
  })
}

interface IGetUsersResponse {
  registeredUsers: IUser[]
  waitlistedUsers: IUser[]
}

const getUsers = (eventId: string) => {
  return client.get<IGetUsersResponse>(`${route}/users/${eventId}`)
}

export default {
  getCalendar,
  addEvent,
  editEvent,
  getUsers
}
