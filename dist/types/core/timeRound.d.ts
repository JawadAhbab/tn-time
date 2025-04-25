import { TimeClause } from '../accessories/TimeClause';
type Peg = Exclude<TimeClause, 'msec'>;
export declare const timeRound: (date: Date, peg?: Peg) => Date;
export {};
