'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('default', function() {

}); 
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});