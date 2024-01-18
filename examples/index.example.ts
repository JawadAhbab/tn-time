import { time } from '../src/index'

console.log(time().format('dd.mm.Y hh:ii:ss:SS A', { zone: 'Asia/Riyadh' }))
