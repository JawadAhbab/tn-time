export declare type TimeFormat = (date: Date, format?: string) => string;
export declare type FormatArr = {
    iskey: boolean;
    char: string;
}[];
export declare type Converters = {
    [keys in Charkeylist]: Function;
};
export declare type Charkeylist = 'd' | 'dd' | 'D' | 'DD' | 'm' | 'mm' | 'M' | 'MM' | 'y' | 'Y' | 'h' | 'hh' | 'H' | 'HH' | 'i' | 'ii' | 's' | 'ss' | 'S' | 'SS' | 'a' | 'A';
