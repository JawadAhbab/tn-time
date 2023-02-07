export default function (dateobj: Date, full: boolean = false) {
  let fullyear: string | number = dateobj.getFullYear()
  if (!full) fullyear = fullyear.toString().substr(2, 2)
  return fullyear
}
