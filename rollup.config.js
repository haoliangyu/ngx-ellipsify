import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/module.ts',
  dest: 'dist/module.js',
  format: 'es',
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript')
    }),
    commonjs()
  ],
  external: ['@angular/core', '@angular/common']
}
