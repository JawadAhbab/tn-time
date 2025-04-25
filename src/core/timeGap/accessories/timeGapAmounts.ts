import { conv } from '../../../accessories/conv'
import { TimeClause, timeClauseSort } from '../../../accessories/TimeClause'
import { TimegapFormats } from './TimeGap'
export type TimeGapAmount = { number: number; clause: keyof TimegapFormats }

export const timeGapAmounts = (gapms: number, clauses: TimeClause[], amounts: TimeGapAmount[] = []): TimeGapAmount[] => {
  const sclues = timeClauseSort(clauses)
  const lastkey = sclues[sclues.length - 1] ?? 'yr'

  if ((gapms >= conv.yr && sclues.includes('yr')) || lastkey === 'yr') {
    amounts.push({ number: gapms / conv.yr, clause: 'yr' })
  } else if ((gapms >= conv.mo && sclues.includes('mo')) || lastkey === 'mo') {
    amounts.push({ number: gapms / conv.mo, clause: 'mo' })
  } else if ((gapms >= conv.day && sclues.includes('day')) || lastkey === 'day') {
    amounts.push({ number: gapms / conv.day, clause: 'day' })
  } else if ((gapms >= conv.hr && sclues.includes('hr')) || lastkey === 'hr') {
    amounts.push({ number: gapms / conv.hr, clause: 'hr' })
  } else if ((gapms >= conv.min && sclues.includes('min')) || lastkey === 'min') {
    amounts.push({ number: gapms / conv.min, clause: 'min' })
  } else if ((gapms >= conv.sec && sclues.includes('sec')) || lastkey === 'sec') {
    amounts.push({ number: gapms / conv.sec, clause: 'sec' })
  } else {
    amounts.push({ number: gapms, clause: 'msec' })
  }

  return amounts
}
