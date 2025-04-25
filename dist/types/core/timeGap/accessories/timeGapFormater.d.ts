import { TimegapFormats, TimegapReadyOpts } from './TimeGap';
type R = (number: number, decimal: number, key: keyof TimegapFormats) => string;
export declare const timeGapFormater: (opts: TimegapReadyOpts) => R;
export {};
