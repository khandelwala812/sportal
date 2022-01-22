interface MongoDocument {
  _id: string
}

export interface IClub extends MongoDocument {
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
