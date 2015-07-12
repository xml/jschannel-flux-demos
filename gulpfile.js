var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify'); // npm package that converts JSX to Javascript
var source = require('vinyl-source-stream'); // convert browserify strings to gulp streams

gulp.task('browserify', function() {
  browserify('./src/js/main.js') // take main.js, which is in JSX
    .transform('reactify') // convert it to JS
    .bundle() // create an output of that
    .pipe(source('main.js')) // now convert it to a stream gulp can make use of
    .pipe(gulp.dest('dist/js')) // have gulp put it where it belongs
  });

gulp.task('copy', function() {
  // just make copies of the HTML and assets in /dist
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['browserify', 'copy'], function() {
  // the default task runs browserify and copy, 
  // then sets up a watch on all files,
  // and runs browserify and copy each time they change.
  return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});