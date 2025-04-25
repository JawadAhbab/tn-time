import { TimeClause } from '../accessories/TimeClause'

export const timeRound = (date: Date, peg: TimeClause = 'msec') => {
  const given = new Date(date)
  // given.setDate(1)
  // given.setMonth(0)
  // given.setHours(0, 0, 0, 0)
  given.setMilliseconds(0)
  return new Date(given)
}
