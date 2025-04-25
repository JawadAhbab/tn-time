'use strict';

var tnConsoler = require('tn-consoler');
var tnNumpad = require('tn-numpad');
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
    dmsms = tnNumpad.numpad(dmsms, padcount);
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
  if (zeropad) hours = tnNumpad.numpad(hours, 2);
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
  if (longer) return tnNumpad.numpad(monthno, 2);
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
const getCaluseAmount = (ms, clause) => {
  return {
    number: ms / clauseValue[clause],
    clause
  };
};
const timeGapParameters = (date, useropts) => {
  const gapms = Math.abs(new Date().getTime() - date.getTime());
  return {
    gapms,
    opts: {
      ...defaultOpts,
      ...(useropts || {})
    }
  };
};
const defaultOpts = {
  decimal: 0,
  maxClause: 1,
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
  } = timeGapParameters(date, useropts);
  let gap = gapms;
  if (gaptype === 'AGO' && timeIsFuture(date)) gap = 0;else if (gaptype === 'REMAIN' && timeIsPast(date)) gap = 0;
  const amount = timeGapAmounts(gap, timeClauseSort(opts.clauses), opts.maxClause);
  console.log(JSON.stringify(amount, null, 2));
  return '';
  // return timeGapFormater({ opts, number, clause })
}
const timeRound = date => {
  const given = new Date(date);
  return new Date(given.setHours(0, 0, 0, 0));
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
  if (process.env.NODE_ENV === 'development') {
    if (invalid) tnConsoler.consoler.log('{bgred+white:ERROR} {yellow+b:time}{white+b:()} Date is invalid');
  }
  return {
    getDate: () => date,
    format: (format, opts) => timeFormat(date, format, opts),
    gap: opts => timeGap('GAP', date, opts),
    ago: opts => timeGap('AGO', date, opts),
    remain: opts => timeGap('REMAIN', date, opts),
    shift: (shiftby, amount) => timeShift(date, shiftby, amount),
    round: () => timeRound(date),
    isToday: () => timeIsToday(date),
    isPast: () => timeIsPast(date),
    isFuture: () => timeIsFuture(date)
  };
};
exports.time = time;
