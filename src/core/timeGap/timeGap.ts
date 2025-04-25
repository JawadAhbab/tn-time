import { timeIsFuture } from '../timeIsFuture'
import { timeIsPast } from '../timeIsPast'
import { TimegapOpts } from './accessories/TimeGap'
import { timeGapAmounts } from './accessories/timeGapAmounts'
import { timeGapFormater } from './accessories/timeGapFormater'
import { timeGapLinter } from './accessories/timeGapLinter'
import { timeGapParameters } from './accessories/timeGapParameters'
type GapType = 'GAP' | 'AGO' | 'REMAIN'

export function timeGap(gaptype: GapType, date: Date, useropts?: TimegapOpts) {
  const { gapms, opts } = timeGapParameters(date, useropts)
  let gap = gapms
  if (gaptype === 'AGO' && timeIsFuture(date)) gap = 0
  else if (gaptype === 'REMAIN' && timeIsPast(date)) gap = 0

  const amounts = timeGapAmounts(gap, opts.clauses, opts.maxClause)
  const linted = timeGapLinter(amounts, opts)
  return timeGapFormater(linted, opts)
}
