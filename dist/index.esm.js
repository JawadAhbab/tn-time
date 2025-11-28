import { numpad } from 'tn-numpad';
import { isArray } from 'tn-validate';
import { numBn } from 'tn-accessories';
const chars = 'd|D|m|M|y|Y|h|H|i|s|S|a|A'.split('|');
const twins = 'd|D|m|M|h|H|i|s|S'.split('|');
const timeFormatArr = formatstr => {
  const formatarr = [];
  let isplain = false;
  let plaintext = '';
  let twinable = false;
  formatstr.split('').forEach(char => {
    // plaintext collector
    if (char === '{') {
      isplain = true;
      return;
    }
    if (char === '}') {
      formatarr.push({
        iskey: false,
        char: plaintext
      });
      plaintext = '';
      isplain = false;
      return;
    }
    if (isplain) {
      plaintext += char;
      return;
    }
    // key collector
    if (twinable) {
      if (chars.includes(char) && char === twinable) {
        formatarr.push({
          iskey: true,
          char: char + char
        });
      } else if (chars.includes(char)) {
        formatarr.push({
          iskey: true,
          char: twinable
        });
        formatarr.push({
          iskey: true,
          char
        });
      } else {
        formatarr.push({
          iskey: true,
          char: twinable
        });
        formatarr.push({
          iskey: false,
          char
        });
      }
    } else {
      if (twins.includes(char)) {
        twinable = char;
        return;
      } else if (chars.includes(char)) {
        formatarr.push({
          iskey: true,
          char
        });
      } else {
        formatarr.push({
          iskey: false,
          char
        });
      }
    }
    twinable = false;
  });
  if (twinable) {
    formatarr.push({
      iskey: true,
      char: twinable
    });
  }
  return formatarr;
};
const tfcAmPm = function (dateobj) {
  let capital = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const hours = dateobj.getHours();
  let ampm = 'am';
  if (hours >= 12) ampm = 'pm';
  if (capital) ampm = ampm.toUpperCase();
  return ampm;
};
const tfcDateMinSecMs = function (dateobj, type) {
  let zeropad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let dmsms;
  if (type === 'date') dmsms = dateobj.getDate();else if (type === 'min') dmsms = dateobj.getMinutes();else if (type === 'sec') dmsms = dateobj.getSeconds();else dmsms = dateobj.getMilliseconds();
  if (zeropad) {
    const padcount = type === 'ms' ? 3 : 2;
    dmsms = numpad(dmsms, padcount);
  }
  return dmsms;
};
const short$1 = 'Sun|Mon|Tue|Wed|Thu|Fri|Sat'.split('|');
const long$1 = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');
const tfcDayName = function (dateobj) {
  let full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const dayno = dateobj.getDay();
  if (full) return long$1[dayno];else return short$1[dayno];
};
const tfcHour = (dateobj, format24, zeropad) => {
  let hours = dateobj.getHours();
  if (!format24) {
    if (hours > 12) hours = hours - 12;
    if (hours === 0) hours = 12;
  }
  if (zeropad) hours = numpad(hours, 2);
  return hours;
};
const short = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|');
const long = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|'); // prettier-ignore
const tfcMonth = (dateobj, name, longer) => {
  let monthno = dateobj.getMonth();
  if (name) {
    if (longer) return long[monthno];
    return short[monthno];
  }
  ++monthno;
  if (longer) return numpad(monthno, 2);
  return monthno;
};
const tfcYear = function (dateobj) {
  let full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let fullyear = dateobj.getFullYear();
  if (!full) fullyear = fullyear.toString().substr(2, 2);
  return fullyear;
};
const timeFormatConverter = (dateobj, formatarr) => {
  let string = '';
  const convlist = converters(dateobj);
  formatarr.forEach(charinfo => {
    if (!charinfo.iskey) return string += charinfo.char;
    string += convlist[charinfo.char]().toString();
  });
  return string;
};
const converters = date => ({
  d: () => tfcDateMinSecMs(date, 'date'),
  dd: () => tfcDateMinSecMs(date, 'date', true),
  D: () => tfcDayName(date),
  DD: () => tfcDayName(date, true),
  m: () => tfcMonth(date, false, false),
  mm: () => tfcMonth(date, false, true),
  M: () => tfcMonth(date, true, false),
  MM: () => tfcMonth(date, true, true),
  y: () => tfcYear(date),
  Y: () => tfcYear(date, true),
  h: () => tfcHour(date, false, false),
  hh: () => tfcHour(date, false, true),
  H: () => tfcHour(date, true, false),
  HH: () => tfcHour(date, true, true),
  i: () => tfcDateMinSecMs(date, 'min'),
  ii: () => tfcDateMinSecMs(date, 'min', true),
  s: () => tfcDateMinSecMs(date, 'sec'),
  ss: () => tfcDateMinSecMs(date, 'sec', true),
  S: () => tfcDateMinSecMs(date, 'ms'),
  SS: () => tfcDateMinSecMs(date, 'ms', true),
  a: () => tfcAmPm(date),
  A: () => tfcAmPm(date, true)
});
const timeFormat = function (date, format) {
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    zone
  } = opts;
  let locale = date;
  if (zone) {
    locale = new Date(new Date(date).toLocaleString('en-US', {
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));
  }
  const formatarr = timeFormatArr(format ?? 'dd-mm-Y');
  return timeFormatConverter(locale, formatarr);
};
const timeGapMs = function (date) {
  let date2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return Math.abs(date2.getTime() - date.getTime());
};
const timeIsFuture = date => {
  return date.getTime() > new Date().getTime();
};
const timeIsPast = date => {
  return date.getTime() < new Date().getTime();
};
const sec = 1000;
const min = sec * 60;
const hr = min * 60;
const day = hr * 24;
const mo = day * 30;
const yr = day * 365;
const clauseValue = {
  msec: 1,
  yr,
  sec,
  min,
  hr,
  day,
  mo
};
const getCaluseAmount = (ms, clause) => ({
  clause,
  number: ms / clauseValue[clause]
});
const timeGapAmounts = function (ms, clauses, maxClause) {
  let amounts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  let fixedClause = arguments.length > 4 ? arguments[4] : undefined;
  const lastclause = clauses[clauses.length - 1] ?? 'yr';
  let amount;
  if (fixedClause) amount = getCaluseAmount(ms, fixedClause);else {
    for (const clause of clauses) {
      if (ms < clauseValue[clause] && lastclause !== clause) continue;
      amount = getCaluseAmount(ms, clause);
      break;
    }
  }
  const clauseLen = amounts.length + 1;
  if (clauseLen >= maxClause) {
    amounts.push(amount);
    return amounts;
  } else {
    const nextClause = clauses[clauses.findIndex(i => i === amount.clause) + 1];
    if (!nextClause) {
      amounts.push(amount);
      return amounts;
    } else {
      const flatnumber = Math.floor(amount.number);
      const ms = Math.round(clauseValue[amount.clause] * (amount.number - flatnumber));
      amount.number = flatnumber;
      amounts.push(amount);
      return timeGapAmounts(ms, clauses, maxClause, amounts, nextClause);
    }
  }
};
const timeGapFormater = (amounts, opts) => {
  const {
    prefix,
    clauseJoin,
    postfix
  } = opts;
  const formats = getFormats(opts);
  const timeclauses = amounts.map(_ref => {
    let {
      number,
      clause
    } = _ref;
    const format = formats[clause];
    return `${number}${format[number <= 1 ? 0 : 1]}`;
  });
  return `${prefix}${timeclauses.join(clauseJoin)}${postfix}`;
};
const getFormats = opts => {
  const formats = defaultFormats[opts.variant];
  Object.entries(opts.formats).forEach(_ref2 => {
    let [key, value] = _ref2;
    const input = value;
    formats[key] = isArray(input) ? input : [input, input];
  });
  return formats;
};
const defaultFormats = {
  minimal: {
    num: num => num,
    yr: ['y', 'y'],
    mo: ['mo', 'mo'],
    day: ['d', 'd'],
    hr: ['h', 'h'],
    min: ['m', 'm'],
    sec: ['s', 's'],
    msec: ['ms', 'ms']
  },
  short: {
    num: num => num,
    yr: [' yr', ' yrs'],
    mo: [' mo', ' mos'],
    day: [' day', ' days'],
    hr: [' hr', ' hrs'],
    min: [' min', ' mins'],
    sec: [' sec', ' secs'],
    msec: [' msec', ' msecs']
  },
  verbose: {
    num: num => num,
    yr: [' year', ' years'],
    mo: [' month', ' months'],
    day: [' day', ' days'],
    hr: [' hour', ' hours'],
    min: [' minute', ' minutes'],
    sec: [' second', ' seconds'],
    msec: [' millisecond', ' milliseconds']
  },
  bangla: {
    num: num => numBn(num),
    yr: [' বছর', ' বছর'],
    mo: [' মাস', ' মাস'],
    day: [' দিন', ' দিন'],
    hr: [' ঘণ্টা', ' ঘণ্টা'],
    min: [' মিনিট', ' মিনিট'],
    sec: [' সেকেন্ড', ' সেকেন্ড'],
    msec: [' মিলিসেকেন্ড', ' মিলিসেকেন্ড']
  }
};
const timeGapLinter = (amounts, opts) => {
  const {
    decimal,
    lastBlankClause,
    trimBlankClause
  } = opts;
  let linted = amounts;
  const last = linted[linted.length - 1];
  last.number = parseFloat(last.number.toFixed(decimal));
  stackup();
  function stackup() {
    if (linted.length <= 1) return;
    const last = linted[linted.length - 1];
    const last2nd = linted[linted.length - 2];
    let maxnum = clauseValue[last2nd.clause] / clauseValue[last.clause];
    if (last.clause === 'mo') maxnum = Math.floor(maxnum);
    if (last.number < maxnum) return;
    last2nd.number++;
    linted.pop();
    stackup();
  }
  if (!lastBlankClause) removeLastBlanks();
  function removeLastBlanks() {
    if (linted.length <= 1) return;
    if (linted[linted.length - 1].number) return;
    linted.pop();
    removeLastBlanks();
  }
  if (trimBlankClause) linted = linted.filter((i, idx) => idx === 0 || i.number);
  return linted;
};
const timeClauseSort = clauses => {
  const sort = [];
  if (clauses.includes('yr')) sort.push('yr');
  if (clauses.includes('mo')) sort.push('mo');
  if (clauses.includes('day')) sort.push('day');
  if (clauses.includes('hr')) sort.push('hr');
  if (clauses.includes('min')) sort.push('min');
  if (clauses.includes('sec')) sort.push('sec');
  if (clauses.includes('msec')) sort.push('msec');
  return sort;
};
const timeClauseCompare = (clause1, compare, clause2) => {
  const cv1 = clauseValue[clause1];
  const cv2 = clauseValue[clause2];
  return cv1 >= cv2;
};
const timeGapParameters = _ref3 => {
  let {
    date,
    date2,
    useropts
  } = _ref3;
  const gapms = timeGapMs(date, date2);
  const opts = {
    ...defaultOpts,
    ...(useropts || {})
  };
  opts.clauses = timeClauseSort(opts.clauses);
  return {
    gapms,
    opts
  };
};
const defaultOpts = {
  decimal: 0,
  maxClause: 1,
  clauseJoin: ' ',
  lastBlankClause: false,
  trimBlankClause: false,
  variant: 'verbose',
  formats: {},
  prefix: '',
  postfix: '',
  clauses: ['yr', 'day', 'hr', 'min', 'sec']
};
function timeGap(gaptype, date, useropts) {
  const {
    gapms,
    opts
  } = timeGapParameters({
    date,
    useropts
  });
  let gap = gapms;
  if (gaptype === 'AGO' && timeIsFuture(date)) gap = 0;else if (gaptype === 'REMAIN' && timeIsPast(date)) gap = 0;
  const amounts = timeGapAmounts(gap, opts.clauses, opts.maxClause);
  const linted = timeGapLinter(amounts, opts);
  return timeGapFormater(linted, opts);
}
const timeGapBtw = (date, date2, useropts) => {
  const {
    gapms,
    opts
  } = timeGapParameters({
    date,
    date2,
    useropts
  });
  const amounts = timeGapAmounts(gapms, opts.clauses, opts.maxClause);
  const linted = timeGapLinter(amounts, opts);
  return timeGapFormater(linted, opts);
};
const timeRound = function (date) {
  let roundby = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'day';
  const given = new Date(date);
  if (timeClauseCompare(roundby, 'gte', 'yr')) given.setMonth(0);
  if (timeClauseCompare(roundby, 'gte', 'mo')) given.setDate(1);
  if (timeClauseCompare(roundby, 'gte', 'day')) given.setHours(0);
  if (timeClauseCompare(roundby, 'gte', 'hr')) given.setMinutes(0);
  if (timeClauseCompare(roundby, 'gte', 'min')) given.setSeconds(0);
  given.setMilliseconds(0);
  return new Date(given);
};
const timeIsToday = date => {
  return timeRound(date).getTime() === timeRound(new Date()).getTime();
};
const timeShift = function (date, shiftby) {
  let amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  const timestamp = date.getTime() + shiftby * clauseValue[amount];
  return new Date(timestamp);
};
const time = d => {
  let date = d ? new Date(d) : new Date();
  const invalid = isNaN(date.getTime());
  if (invalid) date = new Date();
  return {
    getDate: () => date,
    format: (format, opts) => timeFormat(date, format, opts),
    gapMs: () => timeGapMs(date),
    gap: opts => timeGap('GAP', date, opts),
    ago: opts => timeGap('AGO', date, opts),
    remain: opts => timeGap('REMAIN', date, opts),
    gapBtw: (date2, opts) => timeGapBtw(date, time(date2).getDate(), opts),
    shift: (shiftby, amount) => timeShift(date, shiftby, amount),
    round: roundby => timeRound(date, roundby),
    isToday: () => timeIsToday(date),
    isPast: () => timeIsPast(date),
    isFuture: () => timeIsFuture(date)
  };
};
export { time };
