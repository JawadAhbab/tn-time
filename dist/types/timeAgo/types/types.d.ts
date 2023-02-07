import { ObjectInUnion, Optional, OptionLessShallow } from 'tn-typescript';
import { TimeClause } from '../../types/TimeClause';
export declare type FormatInput = string | [Singular: string, Plural: string];
export interface TimeagoOpts extends Optional<ObjectInUnion<TimeClause, boolean>> {
    decimal?: number;
    variant?: TimeagoVariant;
    formats?: Optional<TimeagoFormats>;
    prefix?: string;
    postfix?: string;
}
export declare type TimeagoVariant = 'verbose' | 'short' | 'minimal';
export declare type TimeagoFormats = ObjectInUnion<TimeClause, FormatInput>;
export declare type TimeagoReadyFormats = ObjectInUnion<TimeClause, [string, string]>;
export declare type TimeagoReadyOpts = OptionLessShallow<TimeagoOpts>;
