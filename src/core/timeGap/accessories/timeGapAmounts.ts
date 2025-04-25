import { clauseValue } from '../../../accessories/clauseValue'
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
    if (ms < clauseValue[clause] && lastclause !== clause) continue
    amount = getCaluseAmount(ms, clause)
    break
  }

  const clauseLen = amounts.length + 1
  if (clauseLen >= maxClause) {
    amounts.push(amount)
    return amounts
  } else {
    const nextClause = clauses[clauses.findIndex(i => i === amount.clause) + 1]
    if (!nextClause) amounts.push(amount)
    else {
    }
    return amounts
  }
}

const getCaluseAmount = (ms: number, clause: TimeClause): TimeGapAmount => {
  return { number: ms / clauseValue[clause], clause }
}
