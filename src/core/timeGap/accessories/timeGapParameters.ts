import { timeClauseSort } from '../../../accessories/TimeClause'
import { TimegapOpts, TimegapReadyOpts } from './TimeGap'

export const timeGapParameters = (date: Date, useropts?: TimegapOpts) => {
  const gapms = Math.abs(new Date().getTime() - date.getTime())
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
