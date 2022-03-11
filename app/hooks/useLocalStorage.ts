import { useEffect, useState } from "react"
import localStorage from "@react-native-async-storage/async-storage"

const useLocalStorage = <T>(name: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue)

  const fetchValue = async () => {
    const current = await localStorage.getItem(name)
    setValue(current ? JSON.parse(current) : initialValue)
  }

  useEffect(() => {
    fetchValue()
  }, [])

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value!))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage
