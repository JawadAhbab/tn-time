export const timeGapMs = (date: Date, date2 = new Date()) => {
  return Math.abs(date2.getTime() - date.getTime())
}
