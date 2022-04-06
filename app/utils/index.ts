export const joinWithCommas = (words: string[]) => words.join(", ")

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const month = date.toLocaleString("en-us", { month: "long" })
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}
