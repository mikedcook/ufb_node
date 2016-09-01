var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var del = require('del');

var paths = {
	watchScripts: 'source/js/scripts.js',
	lintScripts: 'source/js/*.js',
	minifyScripts: [
		'node_modules/moment/min/moment.min.js',
		'node_modules/moment-timezone/builds/moment-timezone-with-data-2010-2020.min.js',
		'source/js/scripts.js'
	],
	styles: 'source/sass/**/*.scss',
	images: 'cdn/img'
};

gulp.task('default', ['develop']);

gulp.task('develop', ['scripts','styles','minify-images']);

// watch server files and restart as necessary
gulp.task('start', ['watch'], function () {
	nodemon({
		script: 'app.js',
		ext: 'js html',
		ignore: ['cdn']
		})
	.on('restart', function () {
		console.log('server restarted');
		})
	})

// get tasks ready for watch
gulp.task('clean::js', function() {
	return del(['cdn/js']);
	});
gulp.task('clean::css', function() {
	return del(['cdn/css']);
	});

gulp.task('lint', function() {
	return gulp.src(paths.lintScripts)
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish', { verbose: true }))
	.pipe(jshint.reporter('fail'));
});

gulp.task('scripts', ['lint', 'clean::js'], function() {
	return gulp.src(paths.minifyScripts)
	.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('scripts.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('cdn/js'));
	});

gulp.task('styles', ['clean::css'], function () {
	return gulp.src(paths.styles)
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
		}))
	.pipe(concat('styles.min.css'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('cdn/css'));
	});

gulp.task('minify-images', function() {
	return gulp.src(paths.images)
	.pipe(imagemin({optimizationLevel: 5}))
	.pipe(gulp.dest(paths.images));
	});

// watch scripts, styles, and images
gulp.task('watch', function(){
	gulp.watch(paths.watchScripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.images, ['minify-images']);
	console.log('Waiting for changes...');
	});