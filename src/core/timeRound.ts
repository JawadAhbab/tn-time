export const timeRound = (date: Date) => {
  const given = new Date(date)
  return new Date(given.setHours(0, 0, 0, 0))
}
