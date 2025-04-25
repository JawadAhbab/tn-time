import { time } from '../src/index'

// console.log(time().format('dd.mm.Y hh:ii:ss:SS A', { zone: 'Asia/Riyadh' }))
console.log(time('Fri, 26 Apr 2025 06:01:47 GMT').isToday())
