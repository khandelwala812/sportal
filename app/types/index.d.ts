import { FormikHelpers } from "formik"

interface MongoDocument {
  _id: string
}

export interface ITeam {
  sport: string
  levels: string[]
  genders: string[]
}

export interface ICoach {
  name: string
  description: string
  image?: string
}

export interface IClub extends MongoDocument {
  name: string
  sport: string
  location: string
  distanceFrom: number
  logo: string
  website: string
  about: string
  image: string
  teams: ITeam[]
  coaches: ICoach[]
  reviews: {
    number: number
    stars?: number
  }
}

interface IUser {
  email: string
  isPlatformAdmin: boolean
}

interface ICalendar {
  year: number
  month: string
  days: IDay[]
}

interface IDay {
  date: number
  filler?: boolean
  events: IEvent[]
}

interface IDayOfWeek extends IDay {
  name: string
}

interface IEvent {
  name: string
  // ...
}

export type TFormikHelpers = FormikHelpers<{
  [key: string]: string
}>

export type TMeridiem = "" | "am" | "pm"
