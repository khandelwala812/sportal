import React, { createContext, FC, useMemo, useState } from "react"

export interface IFiltersContext {
  filters: object
  setFilters: (filters: object) => void
}

export const FiltersContext = createContext<IFiltersContext | null>(null)

export const FiltersProvider: FC = ({ children }) => {
  const [filters, setFilters] = useState({})
  const memoizedContextValue = useMemo(
    () => ({ filters, setFilters }),
    [filters, setFilters]
  )

  return (
    <FiltersContext.Provider value={memoizedContextValue}>
      {children}
    </FiltersContext.Provider>
  )
}
