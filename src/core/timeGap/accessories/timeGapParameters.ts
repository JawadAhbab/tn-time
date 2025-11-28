import { timeClauseSort } from '../../../accessories/TimeClause'
import { TimegapOpts, TimegapReadyOpts } from './TimeGap'
import { timeGapMs } from './timeGapMs'
type Props = { date: Date; date2?: Date; useropts?: TimegapOpts }

export const timeGapParameters = ({ date, date2, useropts }: Props) => {
  const gapms = timeGapMs(date, date2)
  const opts = { ...defaultOpts, ...(useropts || {}) }
  opts.clauses = timeClauseSort(opts.clauses)
  return { gapms, opts }
}

const defaultOpts: TimegapReadyOpts = {
  decimal: 0,
  maxClause: 1,
  clauseJoin: ' ',
  lastBlankClause: false,
  trimBlankClause: false,
  variant: 'verbose',
  formats: {},
  prefix: '',
  postfix: '',
  clauses: ['yr', 'day', 'hr', 'min', 'sec'],
}
