import { consoler } from 'tn-consoler'
import { timeAgo } from './timeAgo/timeAgo'
import { timeFormat } from './timeFormat/timeFormat'
import { timeIsFuture } from './timeutils/timeIsFuture'
import { timeIsPast } from './timeutils/timeIsPast'
import { timeIsToday } from './timeutils/timeIsToday'
import { timeRound } from './timeutils/timeRound'
import { timeShift } from './timeutils/timeShift'
import { Time } from './types/Time'

export const time: Time = d => {
  let date = d ? new Date(d) : new Date()
  const invalid = isNaN(date.getTime())
  if (invalid) date = new Date()
  if (process.env.NODE_ENV === 'development') {
    if (invalid) consoler.log('{bgred+white:ERROR} {yellow+b:time}{white+b:()} Date is invalid')
  }

  return {
    getDate: () => date,
    format: (format, opts) => timeFormat(date, format, opts),
    ago: opts => timeAgo(date, opts),
    shift: (shiftby, amount) => timeShift(date, shiftby, amount),
    round: () => timeRound(date),
    isToday: () => timeIsToday(date),
    isPast: () => timeIsPast(date),
    isFuture: () => timeIsFuture(date),
  }
}
