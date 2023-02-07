import { numpad } from 'tn-numpad'

export default function (dateobj: Date, format24: boolean, zeropad: boolean) {
  let hours: string | number = dateobj.getHours()

  if (!format24) {
    if (hours > 12) hours = hours - 12
    if (hours === 0) hours = 12
  }

  if (zeropad) hours = numpad(hours, 2)
  return hours
}
