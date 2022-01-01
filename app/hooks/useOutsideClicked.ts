import { MutableRefObject, useEffect, useState, MouseEvent } from "react"
import { TouchableOpacity } from "react-native"

const useOutsideClicked = (ref: MutableRefObject<TouchableOpacity | null>) => {
  const [outsideClicked, setOutsideClicked] = useState<boolean | null>(false)

  const handleClickOutside = (e: MouseEvent) =>
    setOutsideClicked(ref.current && !ref.current.contains(e.target))

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [ref])

  return outsideClicked
}

export default useOutsideClicked
