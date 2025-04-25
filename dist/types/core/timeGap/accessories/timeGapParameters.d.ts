import { TimegapOpts } from './TimeGap';
export declare const timeGapParameters: (date: Date, useropts?: TimegapOpts) => {
    gapms: number;
    opts: {
        decimal: number;
        maxClause: number;
        clauseJoin: string;
        clauses: import("../../../accessories/TimeClause").TimeClause[];
        variant: import("./TimeGap").TimegapVariant;
        formats: import("tn-typescript").Optional<import("./TimeGap").TimegapFormats>;
        prefix: string;
        postfix: string;
    };
};
