import { ObjectInUnion } from 'tn-typescript'
import { TimeClause } from './TimeClause'

const sec = 1000
const min = sec * 60
const hr = min * 60
const day = hr * 24
const mo = day * 30
const yr = day * 365

export const clauseValue: ObjectInUnion<TimeClause, number> = {
  msec: 1,
  yr,
  sec,
  min,
  hr,
  day,
  mo,
}
