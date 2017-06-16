const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('js', () => {
  return gulp.src([
    'src/js/jquery.js',
    'src/js/bootstrap.js',
    'src/js/propeller.js',
    'src/js/**/*.js'
  ]).pipe(concat('all.js', {newline: '\n'}))
    .pipe(gulp.dest('dist'))
})
gulp.task('css', () => {
  return gulp.src([
    'src/css/bootstrap.css',
    'src/css/propeller.css',
    'src/css/**/*.css'
  ]).pipe(concat('all.css'))
    .pipe(gulp.dest('dist'))
})

gulp.task('dev', ['js', 'css'], () => {
  gulp.watch(['src/**/*.js'], ['js'])
  gulp.watch(['src/**/*.css'], ['css'])
})

gulp.task('default', ['js', 'css'], () => {})
