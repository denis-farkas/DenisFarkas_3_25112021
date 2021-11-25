const { src, dest, watch }= require('gulp');
const sass = require('gulp-sass')(require('sass'));


function css(done) {
    //compiler sass
    //-1 identifier file, 2- compiler, 3 sauvegarder le .css

    src('src/scss/style.scss')
    .pipe( sass() )
    .pipe( dest('build/css') )

    done();

}

function dev(){

    watch('src/scss/style.scss', css)
}

exports.css = css;
exports.dev = dev;