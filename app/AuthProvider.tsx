import React, { createContext, FC, useMemo } from "react"
import useLocalStorage from "./hooks/useLocalStorage"
import { IUser } from "./types"

export interface IAuthContext {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useLocalStorage<IAuthContext["user"]>("user", null)

  const memoizedContextValue = useMemo(
    () => ({
      user,
      setUser
    }),
    [user, setUser]
  )

  return (
    <AuthContext.Provider value={memoizedContextValue}>
      {children}
    </AuthContext.Provider>
  )
}
