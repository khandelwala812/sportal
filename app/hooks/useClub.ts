import { useContext } from "react"

import { ClubContext } from "../ClubProvider"

const useClub = () => {
  const clubContext = useContext(ClubContext)

  if (!clubContext) {
    throw Error("Need context")
  }

  return clubContext
}

export default useClub
