var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('styles.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    return gulp.src('scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('*.scss', gulp.series('sass'));
    gulp.watch('scripts/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));

