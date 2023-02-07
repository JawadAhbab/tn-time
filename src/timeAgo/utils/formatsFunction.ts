import { ObjectInUnion } from 'tn-typescript'
import { isArray } from 'tn-validate'
import { FormatInput, TimeagoFormats, TimeagoReadyFormats, TimeagoReadyOpts, TimeagoVariant } from '../types/types' // prettier-ignore
type R = (number: number, decimal: number, key: keyof TimeagoFormats) => string

export const formatFunction = (opts: TimeagoReadyOpts): R => {
  const formats = defaultFormats[opts.variant]
  Object.entries(opts.formats).forEach(([key, value]) => {
    const input = value as FormatInput
    formats[key as keyof TimeagoFormats] = isArray(input) ? input : [input, input]
  })

  return (number, decimal, key) => {
    const num = parseFloat(number.toFixed(decimal))
    return `${opts.prefix}${num}${formats[key][num <= 1 ? 0 : 1]}${opts.postfix}`
  }
}

const defaultFormats: ObjectInUnion<TimeagoVariant, TimeagoReadyFormats> = {
  minimal: {
    yr: ['y', 'y'],
    mo: ['mo', 'mo'],
    day: ['d', 'd'],
    hr: ['h', 'h'],
    min: ['m', 'm'],
    sec: ['s', 's'],
    msec: ['ms', 'ms'],
  },
  short: {
    yr: [' yr', ' yrs'],
    mo: [' mo', ' mos'],
    day: [' day', ' days'],
    hr: [' hr', ' hrs'],
    min: [' min', ' mins'],
    sec: [' sec', ' secs'],
    msec: [' msec', ' msecs'],
  },
  verbose: {
    yr: [' year', ' years'],
    mo: [' month', ' months'],
    day: [' day', ' days'],
    hr: [' hour', ' hours'],
    min: [' minute', ' minutes'],
    sec: [' second', ' seconds'],
    msec: [' millisecond', ' milliseconds'],
  },
}
