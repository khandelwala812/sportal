import React, { createContext, FC, useMemo, useState } from "react"
import useLocalStorage from "./hooks/useLocalStorage"
import { IClub } from "./types"

export interface IClubContext {
  club: IClub | null
  setClub: (user: IClub | null) => void
}

export const ClubContext = createContext<IClubContext | null>(null)

export const ClubProvider: FC = ({ children }) => {
  const [club, setClub] = useLocalStorage<IClubContext | null>("user", null)

  const memoizedContextValue = useMemo(
    () => ({
      club,
      setClub
    }),
    [club, setClub]
  )

  return (
    <ClubContext.Provider value={memoizedContextValue}>
      {children}
    </ClubContext.Provider>
  )
}
