import getFormatarr from './formatarr/formatarr'
import keyConverter from './keyConverter/keyConverter'
import { TimeFormat as TimeFormat } from './types/TimeFormat'

export const timeFormat: TimeFormat = (date, format, opts = {}) => {
  const { zone } = opts
  let locale = date
  if (zone) locale = new Date(new Date(date).toLocaleString(undefined, { timeZone: zone }))
  const formatarr = getFormatarr(format ?? 'dd-mm-Y')
  return keyConverter(locale, formatarr)
}
