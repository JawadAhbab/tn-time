import { ObjectInUnion, Optional, OptionLessShallow } from 'tn-typescript';
import { TimeClause } from '../../types/TimeClause';
export type FormatInput = string | [Singular: string, Plural: string];
export interface TimeagoOpts extends Optional<ObjectInUnion<TimeClause, boolean>> {
    decimal?: number;
    variant?: TimeagoVariant;
    formats?: Optional<TimeagoFormats>;
    prefix?: string;
    postfix?: string;
}
export type TimeagoVariant = 'verbose' | 'short' | 'minimal' | 'bangla';
export type TimeagoFormats = ObjectInUnion<TimeClause, FormatInput>;
export type TimeagoReadyFormats = ObjectInUnion<TimeClause, [string, string]>;
export type TimeagoReadyOpts = OptionLessShallow<TimeagoOpts>;
