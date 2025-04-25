import { TimegapOpts, TimegapReadyOpts } from './TimeGap'

export const timeGapParameters = (date: Date, useropts?: TimegapOpts) => {
  const gapms = Math.abs(new Date().getTime() - date.getTime())
  return { gapms, opts: { ...defaultOpts, ...(useropts || {}) } }
}

const defaultOpts: TimegapReadyOpts = {
  decimal: 0,
  maxClause: 1,
  clauseJoin: ' ',
  variant: 'verbose',
  formats: {},
  prefix: '',
  postfix: '',
  clauses: ['yr', 'day', 'hr', 'min', 'sec'],
}
