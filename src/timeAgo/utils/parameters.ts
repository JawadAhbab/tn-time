import { TimeagoOpts, TimeagoReadyOpts } from '../types/types'

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

export const parameters = (date: Date, useropts?: TimeagoOpts) => {
  const agoms = new Date().getTime() - date.getTime()
  return {
    agoms: agoms < 0 ? 0 : agoms,
    opts: { ...defaultOpts, ...(useropts || {}) },
  }
}
