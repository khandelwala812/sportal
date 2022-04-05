export const joinWithCommas = (words: string[]) => words.join(", ")

export const formatDate = (date: Date) => {
  const month = date.getMonth()
  const day = date.getDate()
  const year = date.getFullYear()
  
  return `${month} ${day}, ${year}`
}
