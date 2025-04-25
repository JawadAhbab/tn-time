import { TimegapOpts, TimegapReadyOpts } from './TimeGap'

export const timeGapParameters = (date: Date, useropts?: TimegapOpts) => {
  const gapms = Math.abs(new Date().getTime() - date.getTime())
  return { gapms, opts: { ...defaultOpts, ...(useropts || {}) } }
}

const defaultOpts: TimegapReadyOpts = {
  decimal: 0,
  variant: 'verbose',
  formats: {},
  prefix: '',
  postfix: '',
  yr: true,
  mo: false,
  day: true,
  hr: true,
  min: true,
  sec: true,
  msec: false,
}
