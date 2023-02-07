export const timeIsToday = (date: Date) => {
  const given = new Date(date)
  const today = new Date()
  return given.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
}
