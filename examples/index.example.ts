import { time } from '../src/index'

// console.log(time().format('dd.mm.Y hh:ii:ss:SS A', { zone: 'Asia/Riyadh' }))
console.log(
  time('Fri, 19 Apr 2025 06:01:47 GMT').gap({
    prefix: 'f',
    decimal: 2,
    clauses: ['min', 'yr', 'mo'],
  })
)
