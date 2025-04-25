export const timeIsPast = (date: Date) => {
  return date.getTime() < new Date().getTime()
}
