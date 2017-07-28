import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/ngx-text-ellipsis.ts',
  dest: 'dest/ngx-text-ellipsis.js',
  format: 'es',
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript')
    })
  ],
  external: [''],
}
