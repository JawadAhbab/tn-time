import { conv } from '../../../accessories/conv'
import { TimegapFormats, TimegapReadyOpts } from './TimeGap'
type R = { number: number; clause: keyof TimegapFormats }

export const timeGapAmount = (gapms: number, opts: TimegapReadyOpts): R => {
  const { yr, mo, day, hr, min, sec, msec } = opts

  let lastkey: keyof TimegapFormats = 'yr'
  if (mo) lastkey = 'mo'
  if (day) lastkey = 'day'
  if (hr) lastkey = 'hr'
  if (min) lastkey = 'min'
  if (sec) lastkey = 'sec'
  if (msec) lastkey = 'msec'

  if ((gapms >= conv.yr && yr) || lastkey === 'yr') {
    return { number: gapms / conv.yr, clause: 'yr' }
  } else if ((gapms >= conv.mo && mo) || lastkey === 'mo') {
    return { number: gapms / conv.mo, clause: 'mo' }
  } else if ((gapms >= conv.day && day) || lastkey === 'day') {
    return { number: gapms / conv.day, clause: 'day' }
  } else if ((gapms >= conv.hr && hr) || lastkey === 'hr') {
    return { number: gapms / conv.hr, clause: 'hr' }
  } else if ((gapms >= conv.min && min) || lastkey === 'min') {
    return { number: gapms / conv.min, clause: 'min' }
  } else if ((gapms >= conv.sec && sec) || lastkey === 'sec') {
    return { number: gapms / conv.sec, clause: 'sec' }
  } else return { number: gapms, clause: 'msec' }
}
