import { TimeagoFormats, TimeagoReadyOpts } from './TimeGap';
type R = {
    number: number;
    key: keyof TimeagoFormats;
};
export declare const timeGapAmount: (agoms: number, opts: TimeagoReadyOpts) => R;
export {};
