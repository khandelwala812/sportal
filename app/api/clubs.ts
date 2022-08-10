import { IClub } from "../types"
import client from "./client"

const route = "/clubs"

const getClub = (clubId: string) => {
  return client.get<IClub>(`${route}/search?clubId=${clubId}`)
}

export default { getClub }
