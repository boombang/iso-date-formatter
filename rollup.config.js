import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const banner = '//  ISO Date Formatter v' + pkg.version + '\n'
  + '//  https://github.com/boombang/iso-date-formatter\n'
  + '//  (c) 2019-' + new Date().getFullYear() + ' Artem Kazaryan\n'
  + '//  ISO Date Formatter may be freely distributed under the MIT license.\n';

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    banner
  },
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    uglify(),
  ]
};

export default config;
