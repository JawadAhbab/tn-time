import { ObjectInUnion, Optional, OptionLessShallow } from 'tn-typescript'
import { TimeClause } from '../../../accessories/TimeClause'
export type TimegapVariant = 'verbose' | 'short' | 'minimal' | 'bangla'
export type TimegapFormats = ObjectInUnion<TimeClause, TimegapFormatInput>
export type TimegapReadyFormats = ObjectInUnion<TimeClause, [string, string]>
export type TimegapReadyOpts = OptionLessShallow<TimegapOpts>
export type TimegapFormatInput = string | [Singular: string, Plural: string]
export interface TimegapOpts {
  decimal?: number
  maxClause?: number
  clauseJoin?: string
  clauses?: TimeClause[]
  variant?: TimegapVariant
  formats?: Optional<TimegapFormats>
  prefix?: string
  postfix?: string
}
