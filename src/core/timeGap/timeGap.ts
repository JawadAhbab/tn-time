import { timeClauseSort } from '../../accessories/TimeClause'
import { timeIsFuture } from '../timeIsFuture'
import { timeIsPast } from '../timeIsPast'
import { TimegapOpts } from './accessories/TimeGap'
import { timeGapAmounts } from './accessories/timeGapAmounts'
import { timeGapFormater } from './accessories/timeGapFormater'
import { timeGapParameters } from './accessories/timeGapParameters'
type GapType = 'GAP' | 'AGO' | 'REMAIN'

export function timeGap(gaptype: GapType, date: Date, useropts?: TimegapOpts) {
  const { gapms, opts } = timeGapParameters(date, useropts)
  let gap = gapms
  if (gaptype === 'AGO' && timeIsFuture(date)) gap = 0
  else if (gaptype === 'REMAIN' && timeIsPast(date)) gap = 0

  const amounts = timeGapAmounts(gap, timeClauseSort(opts.clauses), opts.maxClause)
  return timeGapFormater({ opts, amounts })
}
