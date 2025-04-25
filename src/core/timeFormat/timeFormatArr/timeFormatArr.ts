import { FormatArr } from '../accessories/TimeFormat'
const chars = 'd|D|m|M|y|Y|h|H|i|s|S|a|A'.split('|')
const twins = 'd|D|m|M|h|H|i|s|S'.split('|')

export const timeFormatArr = (formatstr: string) => {
  const formatarr: FormatArr = []

  let isplain: boolean = false
  let plaintext = ''
  let twinable: false | string = false
  formatstr.split('').forEach(char => {
    // plaintext collector
    if (char === '{') {
      isplain = true
      return
    }
    if (char === '}') {
      formatarr.push({ iskey: false, char: plaintext })
      plaintext = ''
      isplain = false
      return
    }
    if (isplain) {
      plaintext += char
      return
    }

    // key collector
    if (twinable) {
      if (chars.includes(char) && char === twinable) {
        formatarr.push({ iskey: true, char: char + char })
      } else if (chars.includes(char)) {
        formatarr.push({ iskey: true, char: twinable })
        formatarr.push({ iskey: true, char })
      } else {
        formatarr.push({ iskey: true, char: twinable })
        formatarr.push({ iskey: false, char })
      }
    } else {
      if (twins.includes(char)) {
        twinable = char
        return
      } else if (chars.includes(char)) {
        formatarr.push({ iskey: true, char })
      } else {
        formatarr.push({ iskey: false, char })
      }
    }

    twinable = false
  })
  if (twinable) {
    formatarr.push({ iskey: true, char: twinable })
  }

  return formatarr
}
