'use strict'

import {
  removePadding,
  getNamedMonth,
  get12HoursFormat,
  getMeridiem,
  prematureTermination,
  isEmptyOrNotString,
} from './utils';


const tokens = {
  yyyy: (matchResult) => matchResult[1],
  yy: (matchResult) => matchResult[1].slice(-2),
  MMM: getNamedMonth,
  MM: (matchResult) => matchResult[2],
  M: (matchResult) => removePadding(matchResult[2]),
  dd: (matchResult) => matchResult[3],
  d: (matchResult) => removePadding(matchResult[3]),
  HH: (matchResult) => matchResult[4],
  H: (matchResult) => removePadding(matchResult[4]),
  hh: get12HoursFormat,
  h: (matchResult) => removePadding(get12HoursFormat(matchResult)),
  mm: (matchResult) => matchResult[5],
  m: (matchResult) => removePadding(matchResult[5]),
  ss: (matchResult) => matchResult[6],
  s: (matchResult) => removePadding(matchResult[6]),
  SSS: (matchResult) => matchResult[7],
  S: (matchResult) => removePadding(removePadding(matchResult[7])),
  a: getMeridiem
}

const defaultFormat = 'dd MM yyyy HH:mm:ss'

const ISODateFormatter = (input, options) => {
  if(isEmptyOrNotString(input)) {
    return prematureTermination(`Invalid ISO date input = ${input}`);
  }

  const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})/;
  const matchResult = input.match(pattern);
  if (!matchResult) {
    return prematureTermination(`Invalid ISO date input = ${input}`);
  }

  let format = options && options.format || defaultFormat;
  if(isEmptyOrNotString(format)) {
    return prematureTermination(`Invalid format = ${format}`);
  }

  let output = format;

  for(let token in tokens) {
    if(format.search(token) > -1) {
      format = format.replace(token,'')
      output = output.replace(token, tokens[token](matchResult, options));
    }
  }

  return output;
}

export default ISODateFormatter;
