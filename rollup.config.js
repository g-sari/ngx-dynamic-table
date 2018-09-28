import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss'

export default {
  entry: 'index.ts',
  dest: 'dist/bundles/ngx-dynamic-table.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ngx-dynamic-table.module',
  external: ['@angular/core', '@angular/forms', '@angular/common', '@angular/platform-browser', '@angular/flex-layout', '@angular/material', 'lodash', 'rxjs', 'rxjs/operators'],
  plugins: [
    angular({
      replace: false, // additional replace `templateUrl` and `stylesUrls` in every `.js` file
    }),
    typescript(),
    scss({
      //Choose *one* of these possible "output:..." options
      // Default behaviour is to write all styles to the bundle destination where .js is replaced by .css
      output: true,

      // Filename to write all styles to
      output: 'dist/src/dynamic-table-styles.scss',

      // Determine if node process should be terminated on error (default: false)
      failOnError: true,
    }),
    nodeResolve({
      jsnext: true,
      main: true
    })
  ],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/platform-browser': 'ng.platform-browser',
    '@angular/animations': 'ng.animations',
    '@angular/material': 'ng.material',
    '@angular/flex-layout': 'flex-layout',
    'rxjs': 'rxjs',
    'lodash': 'lodash'
  }
}