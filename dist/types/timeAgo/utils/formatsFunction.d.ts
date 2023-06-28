import { TimeagoFormats, TimeagoReadyOpts } from '../types/types';
type R = (number: number, decimal: number, key: keyof TimeagoFormats) => string;
export declare const formatFunction: (opts: TimeagoReadyOpts) => R;
export {};
