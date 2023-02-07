import { conv } from '../utils/conv'
import { TimeClause } from '../types/TimeClause'

export const timeShift = (date: Date, shiftby: number, amount: TimeClause = 'day') => {
  const timestamp = date.getTime() + shiftby * conv[amount]
  return new Date(timestamp)
}
