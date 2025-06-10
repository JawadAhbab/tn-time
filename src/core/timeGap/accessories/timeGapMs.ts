export const timeGapMs = (date: Date) => {
  return Math.abs(new Date().getTime() - date.getTime())
}
