import { consoler } from 'tn-consoler'
import { Time } from './accessories/Time'
import { timeAgo } from './core/timeGap/timeAgo'
import { timeFormat } from './core/timeFormat/timeFormat'
import { timeIsFuture } from './core/timeIsFuture'
import { timeIsPast } from './core/timeIsPast'
import { timeIsToday } from './core/timeIsToday'
import { timeRound } from './core/timeRound'
import { timeShift } from './core/timeShift'

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
