import { conv } from '../../../accessories/conv'
import { TimeagoFormats, TimeagoReadyOpts } from './TimeGap'
type R = { number: number; key: keyof TimeagoFormats }

export const timeGapAmount = (agoms: number, opts: TimeagoReadyOpts): R => {
  const { yr, mo, day, hr, min, sec, msec } = opts

  let lastkey: keyof TimeagoFormats = 'yr'
  if (mo) lastkey = 'mo'
  if (day) lastkey = 'day'
  if (hr) lastkey = 'hr'
  if (min) lastkey = 'min'
  if (sec) lastkey = 'sec'
  if (msec) lastkey = 'msec'

  if ((agoms >= conv.yr && yr) || lastkey === 'yr') {
    return { number: agoms / conv.yr, key: 'yr' }
  } else if ((agoms >= conv.mo && mo) || lastkey === 'mo') {
    return { number: agoms / conv.mo, key: 'mo' }
  } else if ((agoms >= conv.day && day) || lastkey === 'day') {
    return { number: agoms / conv.day, key: 'day' }
  } else if ((agoms >= conv.hr && hr) || lastkey === 'hr') {
    return { number: agoms / conv.hr, key: 'hr' }
  } else if ((agoms >= conv.min && min) || lastkey === 'min') {
    return { number: agoms / conv.min, key: 'min' }
  } else if ((agoms >= conv.sec && sec) || lastkey === 'sec') {
    return { number: agoms / conv.sec, key: 'sec' }
  } else return { number: agoms, key: 'msec' }
}
