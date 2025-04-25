export const timeIsFuture = (date: Date) => {
  return date.getTime() > new Date().getTime()
}
