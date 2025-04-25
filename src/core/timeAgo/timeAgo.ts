import { TimeagoOpts } from './accessories/TimeGap'
import { timeGapFormater } from './accessories/timeGapFormater'
import { timeGapAmount } from './accessories/timeGapAmount'
import { timeGapParameters } from './accessories/timeGapParameters'

export function timeAgo(date: Date, useropts?: TimeagoOpts) {
  const { agoms, opts } = timeGapParameters(date, useropts)
  const formatted = timeGapFormater(opts)
  const { key, number } = timeGapAmount(agoms, opts)
  return formatted(number, opts.decimal, key)
}
