import { TimeagoOpts } from '../types/types';
export declare const parameters: (date: Date, useropts?: TimeagoOpts) => {
    agoms: number;
    opts: {
        decimal: number;
        variant: import("../types/types").TimeagoVariant;
        formats: import("tn-typescript").Optional<import("../types/types").TimeagoFormats>;
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
