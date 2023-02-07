import { TimeagoFormats, TimeagoReadyOpts } from '../types/types';
declare type R = {
    number: number;
    key: keyof TimeagoFormats;
};
export declare const getAgo: (agoms: number, opts: TimeagoReadyOpts) => R;
export {};
