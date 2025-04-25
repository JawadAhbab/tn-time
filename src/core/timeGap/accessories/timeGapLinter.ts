import { clauseValue } from '../../../accessories/clauseValue'
import { TimegapReadyOpts } from './TimeGap'
import { TimeGapAmount } from './timeGapAmounts'

export const timeGapLinter = (amounts: TimeGapAmount[], opts: TimegapReadyOpts) => {
  const { decimal, lastBlankClause, trimBlankClause } = opts
  let linted = amounts

  const last = linted[linted.length - 1]
  last.number = parseFloat(last.number.toFixed(decimal))

  stackup()
  function stackup() {
    if (linted.length <= 1) return
    const last = linted[linted.length - 1]
    const last2nd = linted[linted.length - 2]
    const maxnum = clauseValue[last2nd.clause] / clauseValue[last.clause]
    if (last.number < maxnum) return
    last2nd.number++
    linted.pop()
    stackup()
  }

  if (!lastBlankClause) removeLastBlanks()
  function removeLastBlanks() {
    const last = linted[linted.length - 1]
    if (last.number) return
    linted.pop()
    removeLastBlanks()
  }

  if (trimBlankClause) linted = linted.filter(i => i.number)
  return linted
}
