import { time } from '../src/index'

console.log(time().format('hh:ii:ss A', { zone: 'Asia/Riyadh' }))
