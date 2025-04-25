import { time } from '../src/index'
console.clear()

console.log(time(time().shift(0.99999, 'yr')).gap({ maxClause: 2 }))
