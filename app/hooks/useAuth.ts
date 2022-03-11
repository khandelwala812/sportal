import { useContext } from "react"

import { AuthContext } from "../AuthProvider"

const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw Error("Need context")
  }

  return authContext
}

export default useAuth
