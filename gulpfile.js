require('dotenv').load();
var $           = require('gulp-load-plugins')({ lazy: true });
var gulp        = require('gulp');

var spawn = require('child_process').spawn,
    node;

// Create tasks to execute below
gulp.task('mocha', function() {
  return gulp.src('tests/**/*.js')
    .pipe($.mocha({ reporter: 'list'}))
    .on('error', console.log);
});

gulp.task('server', function() {
  if (node) node.kill();
  node = spawn('npm',['start'], {stdio: 'inherit'});
  node.on('close', function(code){
    if (code !== 0) {
      console.log('Error detected, waiting for changes...'+parseInt(code));
    }
  });
});

gulp.task('jade',function(){
  gulp.src('./views/**')
    .pipe($.connect.reload());
});

gulp.task('connect',['server'], function(){
    $.connect.server({
      root: '.',
      livereload: true
    });
    $.livereload.listen();
});

gulp.task('open',['connect','jade'], function(){
  var options = {
    url: 'http://localhost:'+(process.env.PORT || '3000')
  };
  gulp.src('./gulpfile.js')
    .pipe($.open('',options));
});

// Execute all tasks here
gulp.task('default',['mocha'],function(){
  gulp.start('open');
  //watch any files in views/, reload changes
  gulp.watch(['./views/**'],['jade']);
  gulp.watch(['views/**']).on('change', $.livereload.changed);
});

//clean up if an error is unhandled
process.on('exit', function(){
  if (node) node.kill();
});
