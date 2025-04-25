import { timeRound } from './timeRound'

export const timeIsToday = (date: Date) => {
  return timeRound(date).getTime() === timeRound(new Date()).getTime()
}
