import { Converters } from '../../types/TimeFormat'
import amPm from './utils/amPm'
import dateMinSecMs from './utils/dateMinSecMs'
import dayName from './utils/dayName'
import hour from './utils/hour'
import month from './utils/month'
import year from './utils/year'

export default function (dateobj: Date): Converters {
  return {
    d: () => dateMinSecMs(dateobj, 'date'),
    dd: () => dateMinSecMs(dateobj, 'date', true),
    D: () => dayName(dateobj),
    DD: () => dayName(dateobj, true),
    m: () => month(dateobj, false, false),
    mm: () => month(dateobj, false, true),
    M: () => month(dateobj, true, false),
    MM: () => month(dateobj, true, true),
    y: () => year(dateobj),
    Y: () => year(dateobj, true),
    h: () => hour(dateobj, false, false),
    hh: () => hour(dateobj, false, true),
    H: () => hour(dateobj, true, false),
    HH: () => hour(dateobj, true, true),
    i: () => dateMinSecMs(dateobj, 'min'),
    ii: () => dateMinSecMs(dateobj, 'min', true),
    s: () => dateMinSecMs(dateobj, 'sec'),
    ss: () => dateMinSecMs(dateobj, 'sec', true),
    S: () => dateMinSecMs(dateobj, 'ms'),
    SS: () => dateMinSecMs(dateobj, 'ms', true),
    a: () => amPm(dateobj),
    A: () => amPm(dateobj, true),
  }
}
