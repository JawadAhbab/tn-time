import { Charkeylist, FormatArr } from '../types/TimeFormat'
import converters from './converters/converters'

export default function (dateobj: Date, formatarr: FormatArr) {
  let string: string = ''
  const convlist = converters(dateobj)

  formatarr.forEach((charinfo) => {
    if (!charinfo.iskey) {
      string += charinfo.char
      return
    }

    string += convlist[charinfo.char as Charkeylist]().toString()
  })

  return string
}
