import { FormikHelpers } from "formik"

interface MongoDocument {
  _id: string
}

interface ITeam {
  sport: string
  levels: string[]
  genders: string[]
}

interface ICoach {
  name: string
  description: string
  image?: string
}

interface IClub extends MongoDocument {
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

interface IUser extends MongoDocument {
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

interface IEvent extends MongoDocument {
  name: string
  location: string
  date: string
  // startTime?: ITime
  // endTime?: ITime
  startTime?: string
  endTime?: string
  description?: string
  online: boolean
}
interface IUserEvent extends IEvent {
  registered: boolean
}

interface ITime {
  hour: string
  meridiem: TMeridiem
}

type TFormikHelpers = FormikHelpers<{
  [key: string]: string
}>

type TMeridiem = "" | "am" | "pm"
