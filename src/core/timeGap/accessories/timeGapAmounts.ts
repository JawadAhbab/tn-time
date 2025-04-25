import { conv } from '../../../accessories/conv'
import { TimeClause } from '../../../accessories/TimeClause'
import { TimegapFormats } from './TimeGap'
export type TimeGapAmount = { number: number; clause: keyof TimegapFormats }

export const timeGapAmounts = (
  ms: number,
  clauses: TimeClause[],
  maxClause: number,
  amounts: TimeGapAmount[] = [],
  fixedClause?: TimeClause
): TimeGapAmount[] => {
  const lastclause = clauses[clauses.length - 1] ?? 'yr'

  let amount!: TimeGapAmount
  for (const clause of fixedClause ? [fixedClause] : clauses) {
    if (ms < conv[clause] && lastclause !== clause) continue
    amount = getCaluseAmount(ms, clause)
    break
  }

  const clauseLen = amounts.length + 1
  if (clauseLen >= maxClause) {
    amounts.push(amount)
    return amounts
  } else {
    return amounts
  }
}

const getCaluseAmount = (ms: number, clause: TimeClause): TimeGapAmount => {
  return { number: ms / conv[clause], clause }
}
