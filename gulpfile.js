'use strict';

var gulp = require("gulp"),
	mincss = require("gulp-minify-css"),
	minjs = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sourmap = require("gulp-sourcemaps"),
	less = require("gulp-less"),
	browserSync = require("browser-sync").create();


gulp.task("less",function(){	
	 return gulp.src("dev/pub/less/theme.less")
	    .pipe(sourmap.init())
	    .pipe(less())
	    .on('error', function (e) {
	      console.log(e);
	      this.emit('end');
	    })
	    // .pipe(autoprefixer({
	    //   browsers: ['last 10 versions', 'Android 4.0', '> 5%'],
	    //   cascade: false
	    // }))
	    .pipe(sourmap.write())
	    .pipe(gulp.dest('dev/css'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(browserSync.reload({
	      stream: true
	    }))
})

gulp.task("jsmod",function(){
	return gulp.src('dev/pub/js/**/*.js')
	    .pipe(minjs())
	    .pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest('./dest/js'));
})
gulp.task("cssmod",["less"],function(){
	return gulp.src('dev/css/theme.css')
    .pipe(mincss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dest/css'));
})
gulp.task("server",function(){
	browserSync.init({
		server:{
			// port:8888,
			baseDir:"dev"
		}
		,
		files:["*.html","dev/**/*.html","*.js","dev/pub/**/*.js","dev/**/*.less"]
	})
	// gulp.watch("dev/pub/{pages|tpls}/*.html").on("change",browserSync.reload)
	// gulp.watch("dev/pub/js/*.js",["jsmod"]);
	// gulp.watch("dev/pub/less/*.less",["cssmod"]);
})


gulp.task('default', ['less', 'server'], function () {
  gulp.watch('dev/pub/less/*.less', ['less']);
});
gulp.task('release', ['jsmod', 'cssmod']);