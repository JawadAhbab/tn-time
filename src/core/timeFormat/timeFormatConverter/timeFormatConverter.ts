import { Charkeylist, Converters, FormatArr } from '../accessories/TimeFormat'
import { tfcAmPm } from './converters/tfcAmPm'
import { tfcDateMinSecMs } from './converters/tfcDateMinSecMs'
import { tfcDayName } from './converters/tfcDayName'
import { tfcHour } from './converters/tfcHour'
import { tfcMonth } from './converters/tfcMonth'
import { tfcYear } from './converters/tfcYear'

export const timeFormatConverter = (dateobj: Date, formatarr: FormatArr) => {
  let string: string = ''
  const convlist = converters(dateobj)
  formatarr.forEach(charinfo => {
    if (!charinfo.iskey) return (string += charinfo.char)
    string += convlist[charinfo.char as Charkeylist]().toString()
  })
  return string
}

const converters = (date: Date): Converters => ({
  d: () => tfcDateMinSecMs(date, 'date'),
  dd: () => tfcDateMinSecMs(date, 'date', true),
  D: () => tfcDayName(date),
  DD: () => tfcDayName(date, true),
  m: () => tfcMonth(date, false, false),
  mm: () => tfcMonth(date, false, true),
  M: () => tfcMonth(date, true, false),
  MM: () => tfcMonth(date, true, true),
  y: () => tfcYear(date),
  Y: () => tfcYear(date, true),
  h: () => tfcHour(date, false, false),
  hh: () => tfcHour(date, false, true),
  H: () => tfcHour(date, true, false),
  HH: () => tfcHour(date, true, true),
  i: () => tfcDateMinSecMs(date, 'min'),
  ii: () => tfcDateMinSecMs(date, 'min', true),
  s: () => tfcDateMinSecMs(date, 'sec'),
  ss: () => tfcDateMinSecMs(date, 'sec', true),
  S: () => tfcDateMinSecMs(date, 'ms'),
  SS: () => tfcDateMinSecMs(date, 'ms', true),
  a: () => tfcAmPm(date),
  A: () => tfcAmPm(date, true),
})
