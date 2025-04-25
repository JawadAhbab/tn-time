import { clauseValue } from '../accessories/clauseValue'
import { TimeClause } from '../accessories/TimeClause'

export const timeShift = (date: Date, shiftby: number, amount: TimeClause = 'day') => {
  const timestamp = date.getTime() + shiftby * clauseValue[amount]
  return new Date(timestamp)
}
