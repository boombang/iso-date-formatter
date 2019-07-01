export const removePadding = (input) => Number(input);

export const getMeridiem = (matchResult) => {
  const hours = matchResult[4];
  return hours >= 0 && hours <= 11
    ? 'AM'
    : 'PM';
}

export const get12HoursFormat = (matchResult) => {
  let result = Number(matchResult[4]);
  if(result < 1 || (result > 12 && result < 24)) {
    result -= 12;
  }
  result = Math.abs(result);

  return result < 9
    ? '0' + result
    : result.toString();
}

export const getNamedMonth = (matchResult, options) => {
  if(Array.isArray(options.namedMonths)) {
    return options.namedMonths[Number(matchResult[2]) - 1] || matchResult[2];
  }
  return matchResult[2];
}

export const prematureTermination = (message) => {
  console.error(message);
  return '';
}

export const isEmptyOrNotString = (input) => !input || typeof input !== 'string' || !input.trim();
