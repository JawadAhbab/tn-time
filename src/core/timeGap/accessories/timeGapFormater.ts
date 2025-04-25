import { ObjectInUnion } from 'tn-typescript'
import { isArray } from 'tn-validate'
import { TimegapFormatInput, TimegapFormats, TimegapReadyFormats, TimegapReadyOpts, TimegapVariant } from './TimeGap'; // prettier-ignore
import { TimeGapAmount } from './timeGapAmounts'
type Props = { amounts: TimeGapAmount[]; opts: TimegapReadyOpts }

export const timeGapFormater = ({ amounts, opts }: Props): string => {
  const formats = getFormats(opts)
  const astrs: string[] = []

  amounts.forEach(({ number, clause }, idx) => {
    const num = parseFloat(number.toFixed(opts.decimal))
    const str = `${num}${formats[clause][num <= 1 ? 0 : 1]}`
    if (idx === 0 || (!opts.trimBlankClause && amounts.length - 1 !== idx) || num || (!opts.trimBlankClause && opts.lastBlankClause)) astrs.push(str)
  })

  return `${opts.prefix}${astrs.join(opts.clauseJoin)}${opts.postfix}`
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
