/**
 * Created by jin.huang on 17/1/10.
 */
const gulp = require('gulp');
const webpackConfig = require('./webpack-config');
const webpackStream = require('webpack-stream');
//const revReplace = require('gulp-rev-replace');
const uglify = require('gulp-uglify');
//const rev = require('gulp-rev');
const clean = require('gulp-clean');
const watch = require('gulp-watch');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');
const through = require('through2');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const path = require('path');
const staticPath = path.join(__dirname, '/static/');

global.env = 'browser';

gulp.task('clean', function () {
    return gulp.src('./dist')
        .pipe(clean());
});

gulp.task('streamDev', function () {
    return gulp.src([staticPath + 'js/components/!**', staticPath + 'js/page/!**', staticPath + 'styles/!**'])
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('dist'));
});

gulp.task('stream', function () {
    return gulp.src(['./js/components/**', './js/page/**', './styles/**'])
        .pipe(webpackStream(webpackProduct))
        .pipe(gulp.dest('dist'))
        .pipe(vinylPaths(function(path){
            if (path.indexOf('index.js') > -1){
                del(path);
            }
            return Promise.resolve();
        }))
        .pipe(filter())
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest({base: 'dist', merge: true}))
        .pipe(gulp.dest('dist'));
});


function filter() {
    return through.obj(function (chunk, enc, cb) {
        let file = chunk.history[0];
        if (file.indexOf('.jpg') === -1) {
            this.push(chunk);
        }
        cb();
    })
}


gulp.task('product', function () {
    runSequence('clean', 'es5', 'jquery', 'stream', 'templates');
});

gulp.task('dev', ['clean', 'streamDev']);