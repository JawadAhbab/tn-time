import { timeClauseSort } from '../../accessories/TimeClause'
import { timeIsFuture } from '../timeIsFuture'
import { timeIsPast } from '../timeIsPast'
import { TimegapOpts } from './accessories/TimeGap'
import { timeGapAmounts } from './accessories/timeGapAmounts'
import { timeGapParameters } from './accessories/timeGapParameters'
type GapType = 'GAP' | 'AGO' | 'REMAIN'

export function timeGap(gaptype: GapType, date: Date, useropts?: TimegapOpts) {
  const { gapms, opts } = timeGapParameters(date, useropts)
  let gap = gapms
  if (gaptype === 'AGO' && timeIsFuture(date)) gap = 0
  else if (gaptype === 'REMAIN' && timeIsPast(date)) gap = 0

  const amount = timeGapAmounts(gap, timeClauseSort(opts.clauses), opts.maxClause)
  console.log(JSON.stringify(amount, null, 2))
  return ''
  // return timeGapFormater({ opts, number, clause })
}
