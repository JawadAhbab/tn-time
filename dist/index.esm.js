import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { consoler } from 'tn-consoler';
import { isArray } from 'tn-validate';
import { numpad } from 'tn-numpad';
var formatFunction = function formatFunction(opts) {
  var formats = defaultFormats[opts.variant];
  Object.entries(opts.formats).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    var input = value;
    formats[key] = isArray(input) ? input : [input, input];
  });
  return function (number, decimal, key) {
    var num = parseFloat(number.toFixed(decimal));
    return "".concat(opts.prefix).concat(num).concat(formats[key][num <= 1 ? 0 : 1]).concat(opts.postfix);
  };
};
var defaultFormats = {
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
  }
};
var sec = 1000;
var min = sec * 60;
var hr = min * 60;
var day = hr * 24;
var mo = day * 30;
var yr = day * 365;
var conv = {
  msec: 1,
  yr: yr,
  sec: sec,
  min: min,
  hr: hr,
  day: day,
  mo: mo
};
var getAgo = function getAgo(agoms, opts) {
  var yr = opts.yr,
    mo = opts.mo,
    day = opts.day,
    hr = opts.hr,
    min = opts.min,
    sec = opts.sec,
    msec = opts.msec;
  var lastkey = 'yr';
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
var defaultOpts = {
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
var parameters = function parameters(date, useropts) {
  var agoms = new Date().getTime() - date.getTime();
  return {
    agoms: agoms < 0 ? 0 : agoms,
    opts: _objectSpread(_objectSpread({}, defaultOpts), useropts || {})
  };
};
function timeAgo(date, useropts) {
  var _parameters = parameters(date, useropts),
    agoms = _parameters.agoms,
    opts = _parameters.opts;
  var formatted = formatFunction(opts);
  var _getAgo = getAgo(agoms, opts),
    key = _getAgo.key,
    number = _getAgo.number;
  return formatted(number, opts.decimal, key);
}
var chars = 'd|D|m|M|y|Y|h|H|i|s|S|a|A'.split('|');
var twins = 'd|D|m|M|h|H|i|s|S'.split('|');
function getFormatarr(formatstr) {
  var formatarr = [];
  var isplain = false;
  var plaintext = '';
  var twinable = false;
  formatstr.split('').forEach(function (char) {
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
          char: char
        });
      } else {
        formatarr.push({
          iskey: true,
          char: twinable
        });
        formatarr.push({
          iskey: false,
          char: char
        });
      }
    } else {
      if (twins.includes(char)) {
        twinable = char;
        return;
      } else if (chars.includes(char)) {
        formatarr.push({
          iskey: true,
          char: char
        });
      } else {
        formatarr.push({
          iskey: false,
          char: char
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
  var capital = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var hours = dateobj.getHours();
  var ampm = 'am';
  if (hours >= 12) ampm = 'pm';
  if (capital) ampm = ampm.toUpperCase();
  return ampm;
}
function dateMinSecMs(dateobj, type) {
  var zeropad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var dmsms;
  if (type === 'date') dmsms = dateobj.getDate();else if (type === 'min') dmsms = dateobj.getMinutes();else if (type === 'sec') dmsms = dateobj.getSeconds();else dmsms = dateobj.getMilliseconds();
  if (zeropad) {
    var padcount = type === 'ms' ? 3 : 2;
    dmsms = numpad(dmsms, padcount);
  }
  return dmsms;
}
var short$1 = 'Sun|Mon|Tue|Wed|Thu|Fri|Sat'.split('|');
var long$1 = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');
function dayName(dateobj) {
  var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dayno = dateobj.getDay();
  if (full) return long$1[dayno];else return short$1[dayno];
}
function hour(dateobj, format24, zeropad) {
  var hours = dateobj.getHours();
  if (!format24) {
    if (hours > 12) hours = hours - 12;
    if (hours === 0) hours = 12;
  }
  if (zeropad) hours = numpad(hours, 2);
  return hours;
}
var short = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|');
var long = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|'); // prettier-ignore
function month(dateobj, name, longer) {
  var monthno = dateobj.getMonth();
  if (name) {
    if (longer) return long[monthno];
    return short[monthno];
  }
  ++monthno;
  if (longer) return numpad(monthno, 2);
  return monthno;
}
function year(dateobj) {
  var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fullyear = dateobj.getFullYear();
  if (!full) fullyear = fullyear.toString().substr(2, 2);
  return fullyear;
}
function converters(dateobj) {
  return {
    d: function d() {
      return dateMinSecMs(dateobj, 'date');
    },
    dd: function dd() {
      return dateMinSecMs(dateobj, 'date', true);
    },
    D: function D() {
      return dayName(dateobj);
    },
    DD: function DD() {
      return dayName(dateobj, true);
    },
    m: function m() {
      return month(dateobj, false, false);
    },
    mm: function mm() {
      return month(dateobj, false, true);
    },
    M: function M() {
      return month(dateobj, true, false);
    },
    MM: function MM() {
      return month(dateobj, true, true);
    },
    y: function y() {
      return year(dateobj);
    },
    Y: function Y() {
      return year(dateobj, true);
    },
    h: function h() {
      return hour(dateobj, false, false);
    },
    hh: function hh() {
      return hour(dateobj, false, true);
    },
    H: function H() {
      return hour(dateobj, true, false);
    },
    HH: function HH() {
      return hour(dateobj, true, true);
    },
    i: function i() {
      return dateMinSecMs(dateobj, 'min');
    },
    ii: function ii() {
      return dateMinSecMs(dateobj, 'min', true);
    },
    s: function s() {
      return dateMinSecMs(dateobj, 'sec');
    },
    ss: function ss() {
      return dateMinSecMs(dateobj, 'sec', true);
    },
    S: function S() {
      return dateMinSecMs(dateobj, 'ms');
    },
    SS: function SS() {
      return dateMinSecMs(dateobj, 'ms', true);
    },
    a: function a() {
      return amPm(dateobj);
    },
    A: function A() {
      return amPm(dateobj, true);
    }
  };
}
function keyConverter(dateobj, formatarr) {
  var string = '';
  var convlist = converters(dateobj);
  formatarr.forEach(function (charinfo) {
    if (!charinfo.iskey) {
      string += charinfo.char;
      return;
    }
    string += convlist[charinfo.char]().toString();
  });
  return string;
}
var timeFormat = function timeFormat(date, format) {
  var formatarr = getFormatarr(format !== null && format !== void 0 ? format : 'dd-mm-Y');
  return keyConverter(date, formatarr);
};
var timeIsFuture = function timeIsFuture(date) {
  return date.getTime() > new Date().getTime();
};
var timeIsPast = function timeIsPast(date) {
  return date.getTime() < new Date().getTime();
};
var timeIsToday = function timeIsToday(date) {
  var given = new Date(date);
  var today = new Date();
  return given.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
};
var timeRound = function timeRound(date) {
  var given = new Date(date);
  return new Date(given.setHours(0, 0, 0, 0));
};
var timeShift = function timeShift(date, shiftby) {
  var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  var timestamp = date.getTime() + shiftby * conv[amount];
  return new Date(timestamp);
};
var time = function time(d) {
  var date = d ? new Date(d) : new Date();
  var invalid = isNaN(date.getTime());
  if (invalid) date = new Date();
  if (process.env.NODE_ENV === 'development') {
    if (invalid) consoler.log('{bgred+white:ERROR} {yellow+b:time}{white+b:()} Date is invalid');
  }
  return {
    getDate: function getDate() {
      return date;
    },
    format: function format(_format) {
      return timeFormat(date, _format);
    },
    ago: function ago(opts) {
      return timeAgo(date, opts);
    },
    shift: function shift(shiftby, amount) {
      return timeShift(date, shiftby, amount);
    },
    round: function round() {
      return timeRound(date);
    },
    isToday: function isToday() {
      return timeIsToday(date);
    },
    isPast: function isPast() {
      return timeIsPast(date);
    },
    isFuture: function isFuture() {
      return timeIsFuture(date);
    }
  };
};
export { time };
