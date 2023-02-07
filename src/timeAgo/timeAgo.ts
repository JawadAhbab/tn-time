import { TimeagoOpts } from './types/types'
import { formatFunction } from './utils/formatsFunction'
import { getAgo } from './utils/getAgo'
import { parameters } from './utils/parameters'

export function timeAgo(date: Date, useropts?: TimeagoOpts) {
  const { agoms, opts } = parameters(date, useropts)
  const formatted = formatFunction(opts)
  const { key, number } = getAgo(agoms, opts)
  return formatted(number, opts.decimal, key)
}
