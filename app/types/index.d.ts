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
  firstName: string
  lastName: string
  email: string
  isPlatformAdmin: boolean
}

interface IVideo extends MongoDocument {
  title: string
  videoUrl: string
  views: number
  likes: number
  dislikes: number
  isLiked: boolean
  isDisliked: boolean
  isViewed: boolean
  failedTimes: number[]
}

interface IArticle extends MongoDocument {
  name: string
  publisher: string
  date: string
  image: string
  summary: string
  content: string
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
  capacity: number
  seatsLeft: number
  description?: string
  date: string
  startTime?: string // ITime
  endTime?: string // ITime
  isOnline: boolean
  registeredUsers: string[]
  waitlistedUsers: string[]
  zoomStartUrl: string
  zoomJoinUrl: string
  image: string
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

type TFormikSetValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => void

type TMeridiem = "" | "am" | "pm"
