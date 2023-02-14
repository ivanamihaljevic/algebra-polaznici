var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', async function () { // Kreiramo GULP zadatak
    gulp.src('js/**/*.js') // Govorimo gdje je source file
        .pipe(uglify()) // Transformira datoteke u pipeline (pipe)
        .pipe(gulp.dest('build')); // Gdje da izbacimo gotove files (u folder build)
})