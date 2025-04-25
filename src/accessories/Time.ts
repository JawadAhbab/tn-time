import { TimeagoOpts } from '../core/timeGap/accessories/TimeGap'
import { TimeFormatOpts } from '../core/timeFormat/accessories/TimeFormat'
import { TimeClause } from './TimeClause'

export type Time = (d?: string | number | Date) => {
  getDate(): Date
  gap(opts?: TimeagoOpts): string
  ago(opts?: TimeagoOpts): string
  remain(opts?: TimeagoOpts): string
  shift(shiftby: number, amount?: TimeClause): Date
  round(): Date
  isToday(): boolean
  isPast(): boolean
  isFuture(): boolean
  format(
    /**
     * Example `"dd MM Y"` \
     * Escape Charecters `"MM {Month}"`
     *
     * | key  | Description               | Values             |
     * | ---- | ------------------------- | ------------------ |
     * | `d`  | Date                      | 1 - 31             |
     * | `dd` | Date leading zero         | 01 - 31            |
     * | `D`  | Day 3 letters             | Sat - Fri          |
     * | `DD` | Day Full                  | Saturday - Friday  |
     * | `m`  | Month                     | 1 - 12             |
     * | `mm` | Month leading zero        | 01 - 12            |
     * | `M`  | Month 3 letters           | Jan - Dec          |
     * | `MM` | Month Full                | January - December |
     * | `y`  | Year 2 digits             | 20                 |
     * | `Y`  | Year                      | 2020               |
     * | `h`  | Hours 12h                 | 1 - 12             |
     * | `hh` | Hours 12h leading zero    | 01 - 12            |
     * | `H`  | Hours 24h                 | 1 - 24             |
     * | `HH` | Hours 24h leading zero    | 01-24              |
     * | `i`  | Minutes                   | 0 - 60             |
     * | `ii` | Minutes leading zero      | 00 - 60            |
     * | `s`  | Seconds                   | 0 - 60             |
     * | `ss` | Seconds leading zero      | 00 - 60            |
     * | `S`  | Milliseconds              | 0 - 999            |
     * | `SS` | Milliseconds leading zero | 000 - 999          |
     * | `a`  | Meridiem                  | am, pm             |
     * | `A`  | Capitalized Meridiem      | AM, PM             |
     */
    format?: string | null,
    opts?: TimeFormatOpts
  ): string
}
