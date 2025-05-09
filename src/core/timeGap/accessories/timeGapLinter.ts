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
    let maxnum = clauseValue[last2nd.clause] / clauseValue[last.clause]
    if (last.clause === 'mo') maxnum = Math.floor(maxnum)
    if (last.number < maxnum) return
    last2nd.number++
    linted.pop()
    stackup()
  }

  if (!lastBlankClause) removeLastBlanks()
  function removeLastBlanks() {
    if (linted.length <= 1) return
    if (linted[linted.length - 1].number) return
    linted.pop()
    removeLastBlanks()
  }

  if (trimBlankClause) linted = linted.filter((i, idx) => idx === 0 || i.number)
  return linted
}
