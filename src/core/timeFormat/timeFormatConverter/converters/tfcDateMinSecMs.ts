import { numpad } from 'tn-numpad'

export const tfcDateMinSecMs = (dateobj: Date, type: 'date' | 'min' | 'sec' | 'ms', zeropad: boolean = false) => {
  let dmsms: string | number

  if (type === 'date') dmsms = dateobj.getDate()
  else if (type === 'min') dmsms = dateobj.getMinutes()
  else if (type === 'sec') dmsms = dateobj.getSeconds()
  else dmsms = dateobj.getMilliseconds()

  if (zeropad) {
    const padcount = type === 'ms' ? 3 : 2
    dmsms = numpad(dmsms, padcount)
  }

  return dmsms
}
