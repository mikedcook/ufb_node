var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var del = require('del');

var paths = {
	scripts: 'source/js/**/*.js',
	styles: 'source/sass/**/*.scss',
	images: 'source/images'
};

gulp.task('default', ['develop']);

gulp.task('develop', ['scripts','styles','images','watch']);

gulp.task('clean', function() {
	return del(['cdn']);
});

gulp.task('scripts', ['clean'], function() {
	return gulp.src(paths.scripts)
	.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('all.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('cdn/js'));
});

gulp.task('styles', ['clean'], function () {
  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
       .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
       .pipe(concat('all.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('cdn/css'));
});

gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('cdn/img'));
});

gulp.task('watch', function(){
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.images, ['images']);
	console.log('Waiting for changes...');
});