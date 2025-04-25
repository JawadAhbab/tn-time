import { time } from '../src/index'
console.clear()

console.log(
  time('Fri, 19 Apr 2025 05:30:00 GMT').gap({
    // decimal: 1,
    maxClause: 3,
    trimBlankClause: true,
    lastBlankClause: true,
    clauses: ['day', 'hr', 'min', 'sec'],
  })
)
