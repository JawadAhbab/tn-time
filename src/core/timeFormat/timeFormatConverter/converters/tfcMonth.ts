import { numpad } from 'tn-numpad'
const short = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|')
const long = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|') // prettier-ignore

export const tfcMonth = (dateobj: Date, name: boolean, longer: boolean) => {
  let monthno = dateobj.getMonth()

  if (name) {
    if (longer) return long[monthno]
    return short[monthno]
  }

  ++monthno

  if (longer) return numpad(monthno, 2)
  return monthno
}
