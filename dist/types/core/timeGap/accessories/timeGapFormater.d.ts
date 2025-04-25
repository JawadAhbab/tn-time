import { TimegapReadyOpts } from './TimeGap';
import { TimeGapAmount } from './timeGapAmounts';
type Props = {
    amounts: TimeGapAmount[];
    opts: TimegapReadyOpts;
};
export declare const timeGapFormater: ({ amounts, opts }: Props) => string;
export {};
