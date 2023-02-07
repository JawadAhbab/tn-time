import { time } from '../src/index'

console.log(time().format('dd MM Y'))
console.log(time('11 dec 2020').ago())
console.log(time().shift(100))
