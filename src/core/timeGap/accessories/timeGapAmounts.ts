import { clauseValue } from '../../../accessories/clauseValue'
import { TimeClause } from '../../../accessories/TimeClause'
import { TimegapFormats } from './TimeGap'
export type TimeGapAmount = { number: number; clause: keyof TimegapFormats }
const getCaluseAmount = (ms: number, clause: TimeClause): TimeGapAmount => ({
  clause,
  number: ms / clauseValue[clause],
})

export const timeGapAmounts = (
  ms: number,
  clauses: TimeClause[],
  maxClause: number,
  amounts: TimeGapAmount[] = [],
  fixedClause?: TimeClause
): TimeGapAmount[] => {
  const lastclause = clauses[clauses.length - 1] ?? 'yr'

  let amount!: TimeGapAmount
  if (fixedClause) amount = getCaluseAmount(ms, fixedClause)
  else {
    for (const clause of clauses) {
      if (ms < clauseValue[clause] && lastclause !== clause) continue
      amount = getCaluseAmount(ms, clause)
      break
    }
  }

  const clauseLen = amounts.length + 1
  if (clauseLen >= maxClause) {
    amounts.push(amount)
    return amounts
  } else {
    const nextClause = clauses[clauses.findIndex(i => i === amount.clause) + 1]
    if (!nextClause) {
      amounts.push(amount)
      return amounts
    } else {
      const flatnumber = Math.floor(amount.number)
      const ms = Math.round(clauseValue[amount.clause] * (amount.number - flatnumber))
      amount.number = flatnumber
      amounts.push(amount)
      return timeGapAmounts(ms, clauses, maxClause, amounts, nextClause)
    }
  }
}
