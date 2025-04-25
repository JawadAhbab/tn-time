import { timeFormatArr } from './timeFormatArr/timeFormatArr'
import { timeFormatConverter } from './timeFormatConverter/timeFormatConverter'
import { TimeFormat } from './accessories/TimeFormat'

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
      })
    )
  }

  const formatarr = timeFormatArr(format ?? 'dd-mm-Y')
  return timeFormatConverter(locale, formatarr)
}
