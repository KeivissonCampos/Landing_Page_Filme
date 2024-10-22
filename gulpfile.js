const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Função para processar SCSS em CSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./public/css')); // Mude para public
}

// Função para copiar arquivos HTML para public
function copyHtml() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./public'))  // Copia os arquivos para public
}

// Função para copiar arquivos JS para public
function copyJS() {
    return gulp.src('./src/*.js')
        .pipe(gulp.dest('./public'))  // Copia os arquivos para public
}

// Exporte as funções padrão e de watch
exports.default = gulp.parallel(styles, copyHtml, copyJS);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/*.html', gulp.parallel(copyHtml));
    gulp.watch('./src/*.js', gulp.parallel(copyJS));
};
