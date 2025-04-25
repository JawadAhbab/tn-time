export type TimeClause = 'yr' | 'mo' | 'day' | 'hr' | 'min' | 'sec' | 'msec';
export declare const timeClauseSort: (clauses: TimeClause[]) => TimeClause[];
type Compare = 'lt' | 'lte' | 'eq' | 'gte' | 'gt';
export declare const timeClauseCompare: (clause1: TimeClause, compare: Compare, clause2: TimeClause) => boolean;
export {};
