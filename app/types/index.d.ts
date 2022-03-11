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

interface IEvent {}

export type TFormikHelpers = FormikHelpers<{
  [key: string]: string
}>
