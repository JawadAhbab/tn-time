import { clauseValue } from './clauseValue'

export type TimeClause = 'yr' | 'mo' | 'day' | 'hr' | 'min' | 'sec' | 'msec'

export const timeClauseSort = (clauses: TimeClause[]) => {
  const sort: TimeClause[] = []
  if (clauses.includes('yr')) sort.push('yr')
  if (clauses.includes('mo')) sort.push('mo')
  if (clauses.includes('day')) sort.push('day')
  if (clauses.includes('hr')) sort.push('hr')
  if (clauses.includes('min')) sort.push('min')
  if (clauses.includes('sec')) sort.push('sec')
  if (clauses.includes('msec')) sort.push('msec')
  return sort
}

type Compare = 'lt' | 'lte' | 'eq' | 'gte' | 'gt'
export const timeClauseCompare = (clause1: TimeClause, compare: Compare, clause2: TimeClause) => {
  const cv1 = clauseValue[clause1]
  const cv2 = clauseValue[clause2]
  if (compare === 'lt') return cv1 < cv2
  if (compare === 'lte') return cv1 <= cv2
  if (compare === 'gte') return cv1 >= cv2
  if (compare === 'gt') return cv1 > cv2
  return cv1 === cv2
}
