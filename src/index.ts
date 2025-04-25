import { consoler } from 'tn-consoler'
import { Time } from './accessories/Time'
import { timeFormat } from './core/timeFormat/timeFormat'
import { timeGap } from './core/timeGap/timeGap'
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
    gap: opts => timeGap('GAP', date, opts),
    ago: opts => timeGap('AGO', date, opts),
    remain: opts => timeGap('REMAIN', date, opts),
    shift: (shiftby, amount) => timeShift(date, shiftby, amount),
    round: roundby => timeRound(date, roundby),
    isToday: () => timeIsToday(date),
    isPast: () => timeIsPast(date),
    isFuture: () => timeIsFuture(date),
  }
}
