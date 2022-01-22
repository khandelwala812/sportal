import apiSauce from "apisauce"
import { BASE_API_URL } from "../config/constants"

const client = apiSauce.create({
  baseURL: BASE_API_URL
})

export default client
