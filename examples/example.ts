import { time } from '../src/index'
console.clear()

console.log(
  time(time(time().round()).shift(-24, 'mo')).remain({
    clauses: ['yr', 'mo', 'day'],
    maxClause: 2,
    trimBlankClause: true,
  })
)
