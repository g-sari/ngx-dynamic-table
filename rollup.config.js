import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss'

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngx-dynamic-table.umd.js',
  format: 'umd',
  sourceMap: false,
  moduleName: 'ngx-dynamic-table.module',
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/animations',
    '@angular/material',
    '@angular/flex-layout',
    'rxjs',
    'lodash'
  ],
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
      output: 'dist/bundles/dynamic-table-styles.scss',

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