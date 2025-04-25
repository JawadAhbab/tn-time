import { TimegapFormats, TimegapReadyOpts } from './TimeGap';
type R = {
    number: number;
    key: keyof TimegapFormats;
};
export declare const timeGapAmount: (agoms: number, opts: TimegapReadyOpts) => R;
export {};
