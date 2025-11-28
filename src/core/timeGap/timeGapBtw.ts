import { TimegapOpts } from './accessories/TimeGap'
import { timeGapAmounts } from './accessories/timeGapAmounts'
import { timeGapFormater } from './accessories/timeGapFormater'
import { timeGapLinter } from './accessories/timeGapLinter'
import { timeGapParameters } from './accessories/timeGapParameters'

export const timeGapBtw = (date: Date, date2: Date, useropts?: TimegapOpts) => {
  const { gapms, opts } = timeGapParameters({ date, date2, useropts })
  const amounts = timeGapAmounts(gapms, opts.clauses, opts.maxClause)
  const linted = timeGapLinter(amounts, opts)
  return timeGapFormater(linted, opts)
}
