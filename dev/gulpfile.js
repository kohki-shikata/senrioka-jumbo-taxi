// initialize gulp plugins

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant  = require('imagemin-pngquant');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const ghPages = require('gulp-gh-pages');

// Configure Paths

// dest path
const dest = "../dist/";

const asset_dir = dest + "common/";
const asset_dir_css = asset_dir + "css/";
const asset_dir_img = asset_dir + "img/";
const asset_dir_js = asset_dir + "js/";

var running_tasks = [
  'sass',
  'pug',
  'browser-sync',
  'img_comp'
];

// render pug
gulp.task("pug", function() {
    gulp.src(
        ["pug/**/*.pug",'!' + "pug/**/_*.pug"]
    )
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({stream:true}));
});

// render sass
gulp.task('sass', function() {
  gulp.src(
      ["scss/**/*.scss",'!' + "scss/**/_*.scss"]
  )
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass({pretty: true}))
      .pipe(minifyCss({advanced:false}))
      .pipe(sourcemaps.write())
      .pipe(concat('app.min.css'))
      .pipe(gulp.dest(asset_dir + 'css/'))
  .pipe(browserSync.reload({stream:true}));
});

// compress images

gulp.task('img_comp', function() {
  gulp.src("img/**/*")
      .pipe(imagemin({
        use:[pngquant({
          quality: "60-80",
          speed: 1
        })]
      }))
      .pipe(gulp.dest(asset_dir_img))
  .pipe(browserSync.reload({stream:true}));
});

// js concat and uglify

// define js files as sorted
var js_source = 'js/';

var js_files_single = [
    'bower_components/jquery/dist/jquery.min.js',
    // 'bower_components/materialize/dist/js/materialize.min.js',
    'bower_components/materialize/js/hammer.min.js',
    'bower_components/materialize/js/jquery.hammer.js',
    'bower_components/materialize/js/velocity.min.js',
    // 'bower_components/materialize/js/jquery.easing.1.3.js',
    'bower_components/materialize/js/initial.js',
    'bower_components/materialize/js/global.js',
    'bower_components/materialize/js/sideNav.js',
    'bower_components/materialize/js/tabs.js',
    'bower_components/materialize/js/modal.js',
    'js/app.js',
    'js/clock.js'
];

gulp.task('js_single', function() {
  gulp.src(js_files_single)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(uglify('app.min.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(asset_dir_js))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: dest
        }
    });
});

// gulp command

gulp.task('default', running_tasks, function(){
  gulp.watch(['scss/**/*.scss'],['sass']);
  gulp.watch(['pug/**/*.pug'],['pug']);
  gulp.watch(['js/**/*.js'],[ 'js_single']);
  gulp.watch(['img/*'],['img_comp']);
});

// gulp deploy gulp-gh-pages

gulp.task('deploy', function() {
  return gulp.src(dest + '**/*')
    .pipe(ghPages());
});
