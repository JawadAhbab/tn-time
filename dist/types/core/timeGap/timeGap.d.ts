import { TimeagoOpts } from './accessories/TimeGap';
type GapType = 'GAP' | 'AGO' | 'REMAIN';
export declare function timeGap(gaptype: GapType, date: Date, useropts?: TimeagoOpts): string;
export {};
