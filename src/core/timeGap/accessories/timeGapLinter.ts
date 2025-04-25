import { TimegapReadyOpts } from './TimeGap'
import { TimeGapAmount } from './timeGapAmounts'

export const timeGapLinter = (amounts: TimeGapAmount[], opts: TimegapReadyOpts) => {
  const { decimal } = opts
  console.log(amounts)
  let linted = amounts

  const last = linted[linted.length - 1]
  last.number = parseFloat(last.number.toFixed(decimal))

  stackup()
  function stackup() {
    if (linted.length <= 1) return
    const last = linted[linted.length - 1]
    console.log(last)

    function stack() {
      linted[linted.length - 2].number++
      linted.pop()
      stackup()
    }
  }

  console.log(linted)
  return linted
}
