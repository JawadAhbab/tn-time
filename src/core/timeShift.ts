import { conv } from '../accessories/conv'
import { TimeClause } from '../accessories/TimeClause'

export const timeShift = (date: Date, shiftby: number, amount: TimeClause = 'day') => {
  const timestamp = date.getTime() + shiftby * conv[amount]
  return new Date(timestamp)
}
