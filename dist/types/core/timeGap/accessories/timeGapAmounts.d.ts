import { TimeClause } from '../../../accessories/TimeClause';
import { TimegapFormats } from './TimeGap';
export type TimeGapAmount = {
    number: number;
    clause: keyof TimegapFormats;
};
export declare const timeGapAmounts: (ms: number, clauses: TimeClause[], maxClause: number, amounts?: TimeGapAmount[], fixedClause?: TimeClause) => TimeGapAmount[];
