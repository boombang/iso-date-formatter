const ISODateFormatter = require('../dist')

const date = '2019-06-04T14:03:07.007Z';
const namedMonths = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

test('without parameters', () => {
  expect(ISODateFormatter()).toBe('');
});

test('invalid date: empty string', () => {
  expect(ISODateFormatter('')).toBe('');
});

test('invalid date: empty string with whitespace', () => {
  expect(ISODateFormatter(' ')).toBe('');
});

test('invalid date: invalid string', () => {
  expect(ISODateFormatter('invalid string')).toBe('');
});

test('invalid date: not a string', () => {
  expect(ISODateFormatter(0)).toBe('');
});

test('invalid format: empty string with whitespace', () => {
  expect(ISODateFormatter(date, { format: ' ' })).toBe('');
});

test('invalid format: not a string', () => {
  expect(ISODateFormatter(date, { format: 1 })).toBe('');
});

test('format: dd-MMM-yyyy', () => {
  expect(ISODateFormatter(date, { format: 'dd-MMM-yyyy' })).toBe('04-06-2019');
});

//-----------------------------------------------------------------------

test('default options', () => {
  expect(ISODateFormatter(date)).toBe('04 06 2019 14:03:07');
});

test('format: dd-MM-yyyy', () => {
  expect(ISODateFormatter(date, { format: 'dd-MM-yyyy'})).toBe('04-06-2019');
});

test('format: dd-MMM-yyyy', () => {
  expect(ISODateFormatter(date, { format: 'dd-MMM-yyyy', namedMonths })).toBe('04-Jun-2019');
});

test('format: d-M-yy', () => {
  expect(ISODateFormatter(date, { format: 'd-M-yy'})).toBe('4-6-19');
});

test('format: HH:mm:ss:SSS', () => {
  expect(ISODateFormatter(date, { format: 'HH:mm:ss:SSS'})).toBe('14:03:07:007');
});

test('format: HH:mm:ss:S', () => {
  expect(ISODateFormatter(date, { format: 'HH:mm:ss:S'})).toBe('14:03:07:7');
});

test('format: HH:mm:ss', () => {
  expect(ISODateFormatter(date, { format: 'HH:mm:ss'})).toBe('14:03:07');
});

test('format: HH:mm', () => {
  expect(ISODateFormatter(date, { format: 'HH:mm'})).toBe('14:03');
});

test('format: hh:mm', () => {
  expect(ISODateFormatter(date, { format: 'hh:mm'})).toBe('02:03');
});

test('format: h:m', () => {
  expect(ISODateFormatter(date, { format: 'h:m'})).toBe('2:3');
});

test('format: h:mm a', () => {
  expect(ISODateFormatter(date, { format: 'h:mm a'})).toBe('2:03 PM');
});

test('format: h:mm a', () => {
  expect(ISODateFormatter('2019-06-04T00:03:07.007Z', { format: 'h:mm a'})).toBe('12:03 AM');
});

test('format: h:mm a', () => {
  expect(ISODateFormatter('2019-06-04T05:03:07.007Z', { format: 'h:mm a'})).toBe('5:03 AM');
});

test('format: h:mm a', () => {
  expect(ISODateFormatter('2019-06-04T15:03:07.007Z', { format: 'h:mm a'})).toBe('3:03 PM');
});
