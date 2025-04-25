import { time } from '../src/index'
console.clear()

console.log(time(time().shift(100.11, 'day')).gap({ maxClause: 3 }))
