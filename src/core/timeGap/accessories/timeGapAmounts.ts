import { conv } from '../../../accessories/conv'
import { TimeClause } from '../../../accessories/TimeClause'
import { TimegapFormats } from './TimeGap'
export type TimeGapAmount = { number: number; clause: keyof TimegapFormats }

export const timeGapAmounts = (ms: number, clauses: TimeClause[], amounts: TimeGapAmount[] = [], currClauseCount = 0): TimeGapAmount[] => {
  ++currClauseCount
  const lastkey = clauses[clauses.length - 1] ?? 'yr'

  let amount: TimeGapAmount
  if ((ms >= conv.yr && clauses.includes('yr')) || lastkey === 'yr') {
    amount = { number: ms / conv.yr, clause: 'yr' }
  } else if ((ms >= conv.mo && clauses.includes('mo')) || lastkey === 'mo') {
    amount = { number: ms / conv.mo, clause: 'mo' }
  } else if ((ms >= conv.day && clauses.includes('day')) || lastkey === 'day') {
    amount = { number: ms / conv.day, clause: 'day' }
  } else if ((ms >= conv.hr && clauses.includes('hr')) || lastkey === 'hr') {
    amount = { number: ms / conv.hr, clause: 'hr' }
  } else if ((ms >= conv.min && clauses.includes('min')) || lastkey === 'min') {
    amount = { number: ms / conv.min, clause: 'min' }
  } else if ((ms >= conv.sec && clauses.includes('sec')) || lastkey === 'sec') {
    amount = { number: ms / conv.sec, clause: 'sec' }
  } else {
    amount = { number: ms, clause: 'msec' }
  }

  amounts.push(amount)
  return amounts
}

const getCaluseAmount = (ms: number, clause: TimeClause): TimeGapAmount => {
  return { number: ms / conv[clause], clause }
}
