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
