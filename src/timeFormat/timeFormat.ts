import getFormatarr from './formatarr/formatarr'
import keyConverter from './keyConverter/keyConverter'
import { TimeFormat as TimeFormat } from './types/TimeFormat'

export const timeFormat: TimeFormat = (date, format, opts = {}) => {
  const { zone } = opts
  const formatarr = getFormatarr(format ?? 'dd-mm-Y')

  console.log(zone)

  return keyConverter(date, formatarr)
}
