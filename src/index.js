'use strict'

const defaultOptions = {
  dateStructure: ['day', 'month', 'year'],
  dateDelimiter: ' ', 
  timeStructure: ['hours', 'minutes', 'seconds'],
  timeDelimiter: ':',
  dateTimeDelimiter: ' '
};

const isString = (input) => typeof input === 'string';
const isNotEmptyArray = (input) => Array.isArray(input) && input.length > 1;

const prematureTermination = (message) => {
  console.error(message);
  return '';
}

const ISODateFormatter = (input, options) => {

  if(!input || !isString(input)) {
    return prematureTermination(`Invalid ISO date input = ${input}`);
  }

  const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
  const matchResult = input.match(pattern);
  if (!matchResult) {
    return prematureTermination(`Invalid ISO date input = ${input}`);
  }

  // typeof null === 'object'
  const actualOptions = options && typeof options === 'object'
    ? Object.assign({}, options)
    : defaultOptions;


  let {
    dateStructure,
    dateDelimiter,
    lastTwoDigitsOfYear,
    namedMonths,

    timeStructure,
    timeDelimiter,

    dateTimeDelimiter,
  } = actualOptions;

  const matchResultMap = {};
  let output = '';

  if (isNotEmptyArray(dateStructure)) {
    matchResultMap.year = matchResult[1];
    if (lastTwoDigitsOfYear) {
      matchResultMap.year = matchResultMap.year.slice(-2);
    }

    matchResultMap.month = matchResult[2];
    if (isNotEmptyArray(namedMonths)) {
      const namedMonth = namedMonths[Number(matchResultMap.month)];
      if(namedMonth) {
        matchResultMap.month = namedMonth;
      }
    }

    matchResultMap.day = matchResult[3];

    if(!isString(dateDelimiter)) {
      dateDelimiter = defaultOptions.dateDelimiter;
    }

    output += dateStructure
      .map(item => matchResultMap[item])
      .join(dateDelimiter);
  }

  if (isNotEmptyArray(timeStructure)) {
    if(output) {
      if(!isString(dateTimeDelimiter)) {
        dateTimeDelimiter = defaultOptions.dateTimeDelimiter;
      }
      output += dateTimeDelimiter;
    }

    matchResultMap.hours = matchResult[4];
    matchResultMap.minutes = matchResult[5];
    matchResultMap.seconds = matchResult[6];

    if(!isString(timeDelimiter)) {
      timeDelimiter = defaultOptions.timeDelimiter;
    }

    output += timeStructure
      .map(item => matchResultMap[item])
      .join(timeDelimiter);
  }

  if(!output) {
    return prematureTermination(`
      Something wrong with options.
      Please have a look at dateStructure or timeStructure.
    `)
  }

  return output;

};

export default ISODateFormatter;
