const short = 'Sun|Mon|Tue|Wed|Thu|Fri|Sat'.split('|')
const long = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|')

export const tfcDayName = (dateobj: Date, full: boolean = false) => {
  const dayno = dateobj.getDay()
  if (full) return long[dayno]
  else return short[dayno]
}
