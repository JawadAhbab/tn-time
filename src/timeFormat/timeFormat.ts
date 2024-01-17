import getFormatarr from './formatarr/formatarr'
import keyConverter from './keyConverter/keyConverter'
import { TimeFormat as TimeFormat } from './types/TimeFormat'

export const timeFormat: TimeFormat = (date: Date, format, opts) => {
  const formatarr = getFormatarr(format ?? 'dd-mm-Y')
  return keyConverter(date, formatarr)
}
