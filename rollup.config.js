export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngx-dynamic-table.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ngx-dynamic-table.module',
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