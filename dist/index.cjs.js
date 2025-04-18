'use strict';

var tnConsoler = require('tn-consoler');
var tnValidate = require('tn-validate');
var tnNumpad = require('tn-numpad');
const formatFunction = opts => {
  const formats = defaultFormats[opts.variant];
  Object.entries(opts.formats).forEach(_ref => {
    let [key, value] = _ref;
    const input = value;
    formats[key] = tnValidate.isArray(input) ? input : [input, input];
  });
  return (number, decimal, key) => {
    const num = parseFloat(number.toFixed(decimal));
    return `${opts.prefix}${num}${formats[key][num <= 1 ? 0 : 1]}${opts.postfix}`;
  };
};
const defaultFormats = {
  minimal: {
    yr: ['y', 'y'],
    mo: ['mo', 'mo'],
    day: ['d', 'd'],
    hr: ['h', 'h'],
    min: ['m', 'm'],
    sec: ['s', 's'],
    msec: ['ms', 'ms']
  },
  short: {
    yr: [' yr', ' yrs'],
    mo: [' mo', ' mos'],
    day: [' day', ' days'],
    hr: [' hr', ' hrs'],
    min: [' min', ' mins'],
    sec: [' sec', ' secs'],
    msec: [' msec', ' msecs']
  },
  verbose: {
    yr: [' year', ' years'],
    mo: [' month', ' months'],
    day: [' day', ' days'],
    hr: [' hour', ' hours'],
    min: [' minute', ' minutes'],
    sec: [' second', ' seconds'],
    msec: [' millisecond', ' milliseconds']
  },
  bangla: {
    yr: [' বছর', ' বছর'],
    mo: [' মাস', ' মাস'],
    day: [' দিন', ' দিন'],
    hr: [' ঘণ্টা', ' ঘণ্টা'],
    min: [' মিনিট', ' মিনিট'],
    sec: [' সেকেন্ড', ' সেকেন্ড'],
    msec: [' মিলিসেকেন্ড', ' মিলিসেকেন্ড']
  }
};
const sec = 1000;
const min = sec * 60;
const hr = min * 60;
const day = hr * 24;
const mo = day * 30;
const yr = day * 365;
const conv = {
  msec: 1,
  yr,
  sec,
  min,
  hr,
  day,
  mo
};
const getAgo = (agoms, opts) => {
  const {
    yr,
    mo,
    day,
    hr,
    min,
    sec,
    msec
  } = opts;
  let lastkey = 'yr';
  if (mo) lastkey = 'mo';
  if (day) lastkey = 'day';
  if (hr) lastkey = 'hr';
  if (min) lastkey = 'min';
  if (sec) lastkey = 'sec';
  if (msec) lastkey = 'msec';
  if (agoms >= conv.yr && yr || lastkey === 'yr') {
    return {
      number: agoms / conv.yr,
      key: 'yr'
    };
  } else if (agoms >= conv.mo && mo || lastkey === 'mo') {
    return {
      number: agoms / conv.mo,
      key: 'mo'
    };
  } else if (agoms >= conv.day && day || lastkey === 'day') {
    return {
      number: agoms / conv.day,
      key: 'day'
    };
  } else if (agoms >= conv.hr && hr || lastkey === 'hr') {
    return {
      number: agoms / conv.hr,
      key: 'hr'
    };
  } else if (agoms >= conv.min && min || lastkey === 'min') {
    return {
      number: agoms / conv.min,
      key: 'min'
    };
  } else if (agoms >= conv.sec && sec || lastkey === 'sec') {
    return {
      number: agoms / conv.sec,
      key: 'sec'
    };
  } else return {
    number: agoms,
    key: 'msec'
  };
};
const defaultOpts = {
  decimal: 0,
  variant: 'verbose',
  formats: {},
  prefix: '',
  postfix: '',
  yr: true,
  mo: false,
  day: true,
  hr: true,
  min: true,
  sec: true,
  msec: false
};
const parameters = (date, useropts) => {
  const agoms = new Date().getTime() - date.getTime();
  return {
    agoms: agoms < 0 ? 0 : agoms,
    opts: {
      ...defaultOpts,
      ...(useropts || {})
    }
  };
};
function timeAgo(date, useropts) {
  const {
    agoms,
    opts
  } = parameters(date, useropts);
  const formatted = formatFunction(opts);
  const {
    key,
    number
  } = getAgo(agoms, opts);
  return formatted(number, opts.decimal, key);
}
const chars = 'd|D|m|M|y|Y|h|H|i|s|S|a|A'.split('|');
const twins = 'd|D|m|M|h|H|i|s|S'.split('|');
function getFormatarr(formatstr) {
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
}
function amPm(dateobj) {
  let capital = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const hours = dateobj.getHours();
  let ampm = 'am';
  if (hours >= 12) ampm = 'pm';
  if (capital) ampm = ampm.toUpperCase();
  return ampm;
}
function dateMinSecMs(dateobj, type) {
  let zeropad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let dmsms;
  if (type === 'date') dmsms = dateobj.getDate();else if (type === 'min') dmsms = dateobj.getMinutes();else if (type === 'sec') dmsms = dateobj.getSeconds();else dmsms = dateobj.getMilliseconds();
  if (zeropad) {
    const padcount = type === 'ms' ? 3 : 2;
    dmsms = tnNumpad.numpad(dmsms, padcount);
  }
  return dmsms;
}
const short$1 = 'Sun|Mon|Tue|Wed|Thu|Fri|Sat'.split('|');
const long$1 = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');
function dayName(dateobj) {
  let full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const dayno = dateobj.getDay();
  if (full) return long$1[dayno];else return short$1[dayno];
}
function hour(dateobj, format24, zeropad) {
  let hours = dateobj.getHours();
  if (!format24) {
    if (hours > 12) hours = hours - 12;
    if (hours === 0) hours = 12;
  }
  if (zeropad) hours = tnNumpad.numpad(hours, 2);
  return hours;
}
const short = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|');
const long = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|'); // prettier-ignore
function month(dateobj, name, longer) {
  let monthno = dateobj.getMonth();
  if (name) {
    if (longer) return long[monthno];
    return short[monthno];
  }
  ++monthno;
  if (longer) return tnNumpad.numpad(monthno, 2);
  return monthno;
}
function year(dateobj) {
  let full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let fullyear = dateobj.getFullYear();
  if (!full) fullyear = fullyear.toString().substr(2, 2);
  return fullyear;
}
function converters(dateobj) {
  return {
    d: () => dateMinSecMs(dateobj, 'date'),
    dd: () => dateMinSecMs(dateobj, 'date', true),
    D: () => dayName(dateobj),
    DD: () => dayName(dateobj, true),
    m: () => month(dateobj, false, false),
    mm: () => month(dateobj, false, true),
    M: () => month(dateobj, true, false),
    MM: () => month(dateobj, true, true),
    y: () => year(dateobj),
    Y: () => year(dateobj, true),
    h: () => hour(dateobj, false, false),
    hh: () => hour(dateobj, false, true),
    H: () => hour(dateobj, true, false),
    HH: () => hour(dateobj, true, true),
    i: () => dateMinSecMs(dateobj, 'min'),
    ii: () => dateMinSecMs(dateobj, 'min', true),
    s: () => dateMinSecMs(dateobj, 'sec'),
    ss: () => dateMinSecMs(dateobj, 'sec', true),
    S: () => dateMinSecMs(dateobj, 'ms'),
    SS: () => dateMinSecMs(dateobj, 'ms', true),
    a: () => amPm(dateobj),
    A: () => amPm(dateobj, true)
  };
}
function keyConverter(dateobj, formatarr) {
  let string = '';
  const convlist = converters(dateobj);
  formatarr.forEach(charinfo => {
    if (!charinfo.iskey) {
      string += charinfo.char;
      return;
    }
    string += convlist[charinfo.char]().toString();
  });
  return string;
}
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
      second: '2-digit',
      fractionalSecondDigits: 3
    }));
  }
  const formatarr = getFormatarr(format ?? 'dd-mm-Y');
  return keyConverter(locale, formatarr);
};
const timeIsFuture = date => {
  return date.getTime() > new Date().getTime();
};
const timeIsPast = date => {
  return date.getTime() < new Date().getTime();
};
const timeIsToday = date => {
  const given = new Date(date);
  const today = new Date();
  return given.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
};
const timeRound = date => {
  const given = new Date(date);
  return new Date(given.setHours(0, 0, 0, 0));
};
const timeShift = function (date, shiftby) {
  let amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  const timestamp = date.getTime() + shiftby * conv[amount];
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
    ago: opts => timeAgo(date, opts),
    shift: (shiftby, amount) => timeShift(date, shiftby, amount),
    round: () => timeRound(date),
    isToday: () => timeIsToday(date),
    isPast: () => timeIsPast(date),
    isFuture: () => timeIsFuture(date)
  };
};
exports.time = time;
