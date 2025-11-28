import { TimegapOpts } from './TimeGap';
type Props = {
    date: Date;
    date2?: Date;
    useropts?: TimegapOpts;
};
export declare const timeGapParameters: ({ date, date2, useropts }: Props) => {
    gapms: number;
    opts: {
        decimal: number;
        maxClause: number;
        clauseJoin: string;
        clauses: import("../../../accessories/TimeClause").TimeClause[];
        lastBlankClause: boolean;
        trimBlankClause: boolean;
        variant: import("./TimeGap").TimegapVariant;
        formats: import("tn-typescript").Optional<import("./TimeGap").TimegapFormats>;
        prefix: string;
        postfix: string;
    };
};
export {};
