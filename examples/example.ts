import { time } from '../src/index'
console.clear()

console.log(
  time(time().shift(1.002, 'day')).gap({
    maxClause: 3,
    clauses: ['day', 'hr', 'min'],
    // trimBlankClause: true,
  })
)
