import { TimegapFormats, TimegapReadyOpts } from './TimeGap';
type R = {
    number: number;
    clause: keyof TimegapFormats;
};
export declare const timeGapAmount: (gapms: number, opts: TimegapReadyOpts) => R;
export {};
