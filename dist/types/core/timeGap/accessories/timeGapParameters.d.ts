import { TimeagoOpts } from './TimeGap';
export declare const timeGapParameters: (date: Date, useropts?: TimeagoOpts) => {
    gap: number;
    opts: {
        decimal: number;
        variant: import("./TimeGap").TimeagoVariant;
        formats: import("tn-typescript").Optional<import("./TimeGap").TimeagoFormats>;
        prefix: string;
        postfix: string;
        yr: import("tn-typescript").Optional<boolean>;
        mo: import("tn-typescript").Optional<boolean>;
        day: import("tn-typescript").Optional<boolean>;
        hr: import("tn-typescript").Optional<boolean>;
        min: import("tn-typescript").Optional<boolean>;
        sec: import("tn-typescript").Optional<boolean>;
        msec: import("tn-typescript").Optional<boolean>;
    };
};
