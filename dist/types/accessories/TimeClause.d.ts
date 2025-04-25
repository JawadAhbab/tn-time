export type TimeClause = 'yr' | 'mo' | 'day' | 'hr' | 'min' | 'sec' | 'msec';
export declare const timeClauseSort: (clauses: TimeClause[]) => TimeClause[];
