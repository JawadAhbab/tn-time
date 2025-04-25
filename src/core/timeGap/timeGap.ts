import { timeIsFuture } from '../timeIsFuture'
import { timeIsPast } from '../timeIsPast'
import { TimeagoOpts } from './accessories/TimeGap'
import { timeGapAmount } from './accessories/timeGapAmount'
import { timeGapFormater } from './accessories/timeGapFormater'
import { timeGapParameters } from './accessories/timeGapParameters'
type GapType = 'GAP' | 'AGO' | 'REMAIN'

export function timeGap(gaptype: GapType, date: Date, useropts?: TimeagoOpts) {
  const { gapms, opts } = timeGapParameters(date, useropts)
  let gap = gapms
  if (gaptype === 'AGO' && timeIsFuture(date)) gap = 0
  else if (gaptype === 'REMAIN' && timeIsPast(date)) gap = 0

  const { key, number } = timeGapAmount(gap, opts)
  const formater = timeGapFormater(opts)
  return formater(number, opts.decimal, key)
}
