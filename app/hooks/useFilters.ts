import { useContext } from "react"

import { FiltersContext } from "../FiltersProvider"

const useFilters = () => {
  const filtersContext = useContext(FiltersContext)

  if (!filtersContext) {
    throw Error("Need context")
  }

  return filtersContext
}

export default useFilters
