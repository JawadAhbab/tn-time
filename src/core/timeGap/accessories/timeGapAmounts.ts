import { conv } from '../../../accessories/conv'
import { TimeClause } from '../../../accessories/TimeClause'
import { TimegapFormats } from './TimeGap'
export type TimeGapAmount = { number: number; clause: keyof TimegapFormats }

export const timeGapAmounts = (gapms: number, clauses: TimeClause[], amounts: TimeGapAmount[] = [], currClauseCount = 0): TimeGapAmount[] => {
  ++currClauseCount
  const lastkey = clauses[clauses.length - 1] ?? 'yr'

  let amount: TimeGapAmount
  if ((gapms >= conv.yr && clauses.includes('yr')) || lastkey === 'yr') {
    amount = { number: gapms / conv.yr, clause: 'yr' }
  } else if ((gapms >= conv.mo && clauses.includes('mo')) || lastkey === 'mo') {
    amount = { number: gapms / conv.mo, clause: 'mo' }
  } else if ((gapms >= conv.day && clauses.includes('day')) || lastkey === 'day') {
    amount = { number: gapms / conv.day, clause: 'day' }
  } else if ((gapms >= conv.hr && clauses.includes('hr')) || lastkey === 'hr') {
    amount = { number: gapms / conv.hr, clause: 'hr' }
  } else if ((gapms >= conv.min && clauses.includes('min')) || lastkey === 'min') {
    amount = { number: gapms / conv.min, clause: 'min' }
  } else if ((gapms >= conv.sec && clauses.includes('sec')) || lastkey === 'sec') {
    amount = { number: gapms / conv.sec, clause: 'sec' }
  } else {
    amount = { number: gapms, clause: 'msec' }
  }

  amounts.push(amount)
  return amounts
}
