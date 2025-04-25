import { TimeClause, timeClauseCompare } from '../accessories/TimeClause'
type Peg = Exclude<TimeClause, 'msec'>

export const timeRound = (date: Date, peg: Peg = 'day') => {
  const given = new Date(date)
  if (timeClauseCompare(peg, 'gte', 'yr')) given.setMonth(0)
  if (timeClauseCompare(peg, 'gte', 'mo')) given.setDate(1)
  if (timeClauseCompare(peg, 'gte', 'day')) given.setHours(0)
  if (timeClauseCompare(peg, 'gte', 'hr')) given.setMinutes(0)
  if (timeClauseCompare(peg, 'gte', 'min')) given.setSeconds(0)
  given.setMilliseconds(0)
  return new Date(given)
}
