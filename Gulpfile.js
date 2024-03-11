// Tarefa para compilar SASS
gulp.task('sass', function () {
    return gulp.src('C:/Users/Aline/Documents/Ebac/gulp/src/scss/*.scss') // Diretório de entrada do SASS
        .pipe(sass())
        .pipe(gulp.dest('C:/Users/Aline/Documents/Ebac/gulp/dist/css')); // Diretório de saída do CSS
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function () {
    return gulp.src('C:/Users/Aline/Documents/Ebac/gulp/src/images/*') // Diretório de entrada das imagens
        .pipe(imagemin())
        .pipe(gulp.dest('C:/Users/Aline/Documents/Ebac/gulp/dist/images')); // Diretório de saída das imagens
});

// Tarefa para comprimir JavaScript
gulp.task('uglify', function () {
    return gulp.src('C:/Users/Aline/Documents/Ebac/gulp/src/js/*.js') // Diretório de entrada do JavaScript
        .pipe(uglify())
        .pipe(gulp.dest('C:/Users/Aline/Documents/Ebac/gulp/dist/js')); // Diretório de saída do JavaScript
});
