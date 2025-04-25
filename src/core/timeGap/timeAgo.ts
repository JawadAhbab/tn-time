import { TimeagoOpts } from './accessories/TimeGap'
import { timeGapAmount } from './accessories/timeGapAmount'
import { timeGapFormater } from './accessories/timeGapFormater'
import { timeGapParameters } from './accessories/timeGapParameters'

export function timeAgo(date: Date, useropts?: TimeagoOpts) {
  const { gap, opts } = timeGapParameters(date, useropts)
  const { key, number } = timeGapAmount(gap, opts)
  const formater = timeGapFormater(opts)
  return formater(number, opts.decimal, key)
}
