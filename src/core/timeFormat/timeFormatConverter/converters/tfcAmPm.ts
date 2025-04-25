export const tfcAmPm = (dateobj: Date, capital: boolean = false) => {
  const hours = dateobj.getHours()
  let ampm = 'am'
  if (hours >= 12) ampm = 'pm'
  if (capital) ampm = ampm.toUpperCase()
  return ampm
}
