const { src, dest, watch, series }= require('gulp');

//CSS et SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

//Images
const imagemin = require('gulp-imagemin');
const webp =require('gulp-webp');

function css(done) {
    //compiler sass
    //-1 identifier file, 2- compiler, 3 sauvegarder le .css

    src('src/scss/style.scss')
    .pipe( sass() )
    .pipe( postcss( [ autoprefixer() ] ) )
    .pipe( dest('build/css') )

    done();

}

function images() {
   
    return src('src/img/**/*')
    .pipe( imagemin({ optimizationLevel: 3 }))
    .pipe( dest('build/img') );
}

function versionWebp() {
    return src('src/img/**/*.{png,jpg}')
    .pipe( webp())
    .pipe( dest('build/img') )
}
function dev(){
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', images);
}

exports.css = css;
exports.dev = dev;
exports.images = images;
exports.versionWebp = versionWebp;
exports.default =series( images,versionWebp, css, dev );