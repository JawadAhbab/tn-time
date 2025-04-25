import { TimeagoOpts, TimeagoReadyOpts } from './TimeGap'

export const timeGapParameters = (date: Date, useropts?: TimeagoOpts) => {
  const agoms = new Date().getTime() - date.getTime()
  return {
    agoms: agoms < 0 ? 0 : agoms,
    opts: { ...defaultOpts, ...(useropts || {}) },
  }
}

const defaultOpts: TimeagoReadyOpts = {
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
