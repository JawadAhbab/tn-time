import { Time } from './accessories/Time'
import { timeFormat } from './core/timeFormat/timeFormat'
import { timeGapMs } from './core/timeGap/accessories/timeGapMs'
import { timeGap } from './core/timeGap/timeGap'
import { timeGapBtw } from './core/timeGap/timeGapBtw'
import { timeIsFuture } from './core/timeIsFuture'
import { timeIsPast } from './core/timeIsPast'
import { timeIsToday } from './core/timeIsToday'
import { timeRound } from './core/timeRound'
import { timeShift } from './core/timeShift'

export const time: Time = d => {
  let date = d ? new Date(d) : new Date()
  const invalid = isNaN(date.getTime())
  if (invalid) date = new Date()
  return {
    getDate: () => date,
    format: (format, opts) => timeFormat(date, format, opts),
    gapMs: () => timeGapMs(date),
    gap: opts => timeGap('GAP', date, opts),
    ago: opts => timeGap('AGO', date, opts),
    remain: opts => timeGap('REMAIN', date, opts),
    gapBtw: (date2, opts) => timeGapBtw(date, time(date2).getDate(), opts),
    shift: (shiftby, amount) => timeShift(date, shiftby, amount),
    round: roundby => timeRound(date, roundby),
    isToday: () => timeIsToday(date),
    isPast: () => timeIsPast(date),
    isFuture: () => timeIsFuture(date),
  }
}
