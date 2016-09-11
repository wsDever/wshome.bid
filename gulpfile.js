'use strict';

var gulp = require("gulp"),
	mincss = require("gulp-minify-css"),
	minjs = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sourmap = require("gulp-sourcemaps"),
	less = require("gulp-less"),
	browserSync = require("browser-sync").create();

gulp.task("less",function(){	
	gulp.src("dev/less/**/*.less")
		.pipe(less())
		.pipe(gulp.dest("dev/res/css"))
})

gulp.task("jsmod",function(){
	return gulp.src("dev/pub/**/*.js")
		.pipe(browserSync.stream())
})
gulp.task("cssmod",["less"],function(){
	return gulp.src("dev/res/**/*.css")
		.pipe(browserSync.stream())
})
gulp.task("server",["jsmod","cssmod"],function(){
	browserSync.init({
		server:{
			// port:8888,
			baseDir:"dev"
		},
		files:["*.html","dev/**/*.html","*.js","dev/pub/**/*.js","dev/res/**/*.css"]
	})
	// gulp.watch("dev/pub/**/*.html").on("change",browserSync.reload)
	gulp.watch("dev/res/**/*.css",["cssmod"]);
	gulp.watch("dev/pub/**/*.js",["jsmod"]);
})