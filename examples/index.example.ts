import { time } from '../src/index'
console.clear()

console.log(
  time('Fri, 19 Apr 2025 05:01:47 GMT').gap({
    decimal: 2,
    maxClause: 2,
    clauses: ['day', 'hr', 'min', 'sec'],
  })
)
