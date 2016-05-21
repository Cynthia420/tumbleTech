var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    stylus      = require('gulp-stylus'),
    prefix      = require('gulp-autoprefixer'),
    plumber     = require('gulp-plumber'),
    uglify      = require('gulp-uglify'),
    imagemin    = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

gulp.task('scripts', function(){
  return gulp.src('./app/js/**/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.stream());
});

gulp.task('styles', function () {
  return gulp.src('./app/styles/**/*.styl')
  .pipe(plumber())
  .pipe(stylus({ 'include css': true }))
  .pipe(prefix('last 2 versions'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.stream());
});

gulp.task('jade', function() {
    return gulp.src('./app/**/*.jade')
    .pipe(plumber())
    .pipe(jade({ compress: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('image', function() {
  return gulp.src('./app/imgs/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/imgs'));
});

gulp.task('browser-sync', function () {
  browserSync.init({
      server: {
        baseDir: './dist'
      },
  });
  gulp.watch('./app/js/**/*.js', ['scripts']);
  gulp.watch('./app/styles/**/*.styl', ['styles']);
  gulp.watch('./app/**/*.jade', ['jade']);
  gulp.watch('./app/imgs/**/*', ['image']);
});

gulp.task('default', ['scripts', 'jade', 'image', 'styles', 'browser-sync']);
