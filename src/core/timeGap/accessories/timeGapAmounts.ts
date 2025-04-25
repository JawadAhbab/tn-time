import { conv } from '../../../accessories/conv'
import { TimeClause } from '../../../accessories/TimeClause'
import { TimegapFormats } from './TimeGap'
export type TimeGapAmount = { number: number; clause: keyof TimegapFormats }

export const timeGapAmounts = (
  ms: number,
  clauses: TimeClause[],
  amounts: TimeGapAmount[] = [],
  currClauseCount = 0,
  fixedClause?: TimeClause
): TimeGapAmount[] => {
  ++currClauseCount
  const lastclause = clauses[clauses.length - 1] ?? 'yr'

  let amount!: TimeGapAmount
  for (const clause of fixedClause ? [fixedClause] : clauses) {
    if (ms < conv[clause] && lastclause !== clause) continue
    amount = getCaluseAmount(ms, clause)
    break
  }

  amounts.push(amount)
  return amounts
}

const getCaluseAmount = (ms: number, clause: TimeClause): TimeGapAmount => {
  return { number: ms / conv[clause], clause }
}
