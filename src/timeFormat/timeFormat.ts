import getFormatarr from './formatarr/formatarr'
import keyConverter from './keyConverter/keyConverter'
import { TimeFormat as TimeFormat } from './types/TimeFormat'

export const timeFormat: TimeFormat = (date: Date, format = 'dd-mm-Y') => {
  const formatarr = getFormatarr(format)
  return keyConverter(date, formatarr)
}
