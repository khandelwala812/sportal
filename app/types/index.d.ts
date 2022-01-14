export interface IClub {
  name: string
  sport: string
  image: string
  reviews: {
    number: number
    stars?: number
  }
  distanceFrom: number
  location: string
}
