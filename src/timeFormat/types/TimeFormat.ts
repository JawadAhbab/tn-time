export type TimeFormat = (date: Date, format?: string) => string

export type FormatArr = {
  iskey: boolean
  char: string
}[]

export type Converters = {
  [keys in Charkeylist]: Function
}

export type Charkeylist =
  | 'd'
  | 'dd'
  | 'D'
  | 'DD'
  | 'm'
  | 'mm'
  | 'M'
  | 'MM'
  | 'y'
  | 'Y'
  | 'h'
  | 'hh'
  | 'H'
  | 'HH'
  | 'i'
  | 'ii'
  | 's'
  | 'ss'
  | 'S'
  | 'SS'
  | 'a'
  | 'A'
