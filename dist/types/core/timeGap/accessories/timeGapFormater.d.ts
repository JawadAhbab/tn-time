import { TimegapFormats, TimegapReadyOpts } from './TimeGap';
type Props = {
    number: number;
    clause: keyof TimegapFormats;
    opts: TimegapReadyOpts;
};
export declare const timeGapFormater: ({ number, clause, opts }: Props) => string;
export {};
