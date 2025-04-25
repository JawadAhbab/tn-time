import { TimeagoFormats, TimeagoReadyOpts } from './TimeGap';
type R = (number: number, decimal: number, key: keyof TimeagoFormats) => string;
export declare const timeGapFormater: (opts: TimeagoReadyOpts) => R;
export {};
