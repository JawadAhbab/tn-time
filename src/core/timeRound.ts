import { TimeClause, timeClauseCompare } from '../accessories/TimeClause'
export type TimeRoundBy = Exclude<TimeClause, 'msec'>

export const timeRound = (date: Date, roundby: TimeRoundBy = 'day') => {
  const given = new Date(date)
  if (timeClauseCompare(roundby, 'gte', 'yr')) given.setMonth(0)
  if (timeClauseCompare(roundby, 'gte', 'mo')) given.setDate(1)
  if (timeClauseCompare(roundby, 'gte', 'day')) given.setHours(0)
  if (timeClauseCompare(roundby, 'gte', 'hr')) given.setMinutes(0)
  if (timeClauseCompare(roundby, 'gte', 'min')) given.setSeconds(0)
  given.setMilliseconds(0)
  return new Date(given)
}
