const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const minify = require('gulp-minify')

gulp.task('default', ['watch'])

gulp.task('watch', function() {
  gulp.watch('./src/scss/*.scss', ['styles'])
  gulp.watch('./src/javascripts/**/*.js', ['scripts'])
})

gulp.task('styles', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'))
})

gulp.task('scripts', function() {
  gulp.src('./src/javascripts/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(minify())
    .pipe(gulp.dest('./public//'))
})
