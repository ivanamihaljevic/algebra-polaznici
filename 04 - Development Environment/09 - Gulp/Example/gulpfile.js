// Help https://gulpjs.com/docs/en/getting-started/working-with-files/
var gulp = require('gulp'); // Define gulp
var uglify = require('gulp-uglify'); // Define gulp uglify

gulp.task('uglify', async function () { // Create a task
    gulp.src('js/**/*.js') // Where is the source located
        .pipe(uglify()) // Transform files in a pipeline (pipe)
        .pipe(gulp.dest('build')); // Destination is a folder called build
});

// Run with gulp uglify in order to run this gulp file
// Tutorial at https://developers.google.com/web/ilt/pwa/introduction-to-gulp#:~:text=Gulp%20is%20a%20cross%2Dplatform,source%20files%20into%20production%20files.