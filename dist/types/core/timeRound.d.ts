import { TimeClause } from '../accessories/TimeClause';
export type TimeRoundBy = Exclude<TimeClause, 'msec'>;
export declare const timeRound: (date: Date, roundby?: TimeRoundBy) => Date;
