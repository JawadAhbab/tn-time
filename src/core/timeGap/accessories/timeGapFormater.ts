import { ObjectInUnion } from 'tn-typescript'
import { isArray } from 'tn-validate'
import { TimegapFormatInput, TimegapFormats, TimegapReadyFormats, TimegapReadyOpts, TimegapVariant } from './TimeGap'; // prettier-ignore
type Props = { number: number; clause: keyof TimegapFormats; opts: TimegapReadyOpts }

export const timeGapFormater = ({ number, clause, opts }: Props): string => {
  const formats = getFormats(opts)
  const num = parseFloat(number.toFixed(opts.decimal))
  return `${opts.prefix}${num}${formats[clause][num <= 1 ? 0 : 1]}${opts.postfix}`
}

const getFormats = (opts: TimegapReadyOpts) => {
  const formats = defaultFormats[opts.variant]
  Object.entries(opts.formats).forEach(([key, value]) => {
    const input = value as TimegapFormatInput
    formats[key as keyof TimegapFormats] = isArray(input) ? input : [input, input]
  })
  return formats
}

const defaultFormats: ObjectInUnion<TimegapVariant, TimegapReadyFormats> = {
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
  bangla: {
    yr: [' বছর', ' বছর'],
    mo: [' মাস', ' মাস'],
    day: [' দিন', ' দিন'],
    hr: [' ঘণ্টা', ' ঘণ্টা'],
    min: [' মিনিট', ' মিনিট'],
    sec: [' সেকেন্ড', ' সেকেন্ড'],
    msec: [' মিলিসেকেন্ড', ' মিলিসেকেন্ড'],
  },
}
