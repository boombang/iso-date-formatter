# ISO Date Formatter
[![npm module](https://badge.fury.io/js/iso-date-formatter.svg)](https://www.npmjs.org/package/iso-date-formatter)
[![dependencies](https://david-dm.org/boombang/iso-date-formatter.svg)](https://david-dm.org/boombang/iso-date-formatter)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg)](license.txt)

Installation
------------
```bash
npm install iso-date-formatter --save
```

Usage
-----
```js
import ISODateFormatter from 'iso-date-formatter';

const isoDate = '2019-06-04T14:03:07.007Z';
const formattedDate = ISODateFormatter(isoDate, { format: 'dd MM yyyy HH:mm' }); // => 04 06 2019 14:03
```

Options
-------
The second parameter is the options object:

| Option        | Type    | Default                       | Description
| -----------   | ------- | ----------------------------- | --------------
| `format`      | String  | `dd MM yyyy HH:mm:ss`         | A string which consists of any symbols and tokens. Tokens will be changed by corresponding value from the input string in ISO format.
| `namedMonths` | Array   | result of `MM`                | An array of named months e.g `['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']` which is used if token `MMM` is provided in `format` option

Tokens
------
Examples below given for 2019-06-04T14:03:07.007Z

| Name   | Description                       | Example |
|--------|-----------------------------------|---------|
| `yyyy` | four-digit year                   | 2019    |
| `yy`   | two-digit year                    | 19      |
| `MMM`  | month from `namedMonths` option   | Jun     |
| `MM`   | month as an padded number         | 06      |
| `M`    | month as an unpadded number       | 6       |
| `dd`   | day of the month, padded to 2     | 04      |
| `d`    | day of the month, no padding      | 4       |
| `HH`   | hour in 24-hour time, padded to 2 | 14      |
| `H`    | hour in 24-hour time, no padding  | 14      |
| `hh`   | hour in 12-hour time, padded to 2 | 02      |
| `h`    | hour in 12-hour time, no padding  | 2       |
| `mm`   | minute, padded to 2               | 03      |
| `m`    | minute, no padding                | 3       |
| `ss`   | second, padded to 2 padding       | 07      |
| `s`    | second, no padding                | 7       |
| `SSS`  | millisecond, padded to 3          | 007     |
