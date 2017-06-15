const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('js', () => {
  return gulp.src(['components/**/*.js'])
    .pipe(concat('all.min.js', {newline: '\n'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['js'], () => {
  gulp.watch(['components/**/*.js'], ['js'])
})
