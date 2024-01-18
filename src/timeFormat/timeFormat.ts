import getFormatarr from './formatarr/formatarr'
import keyConverter from './keyConverter/keyConverter'
import { TimeFormat } from './types/TimeFormat'

export const timeFormat: TimeFormat = (date, format, opts = {}) => {
  const { zone } = opts
  let locale = date
  if (zone) {
    locale = new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone: zone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
      })
    )
  }

  const formatarr = getFormatarr(format ?? 'dd-mm-Y')
  return keyConverter(locale, formatarr)
}
