import gulp from 'gulp';
import {imagePaths, $} from './constants';

/**
 * @desc Compiles the main Sass file into an expanded,
 *  human readable format and a minified format.
 *  Adds browser prefixing and sourcemaps.
 * @returns {*}
 */
export default () => {
    $.util.log($.util.colors.green('Copying images...'));
    return gulp.src(imagePaths.src)
		// pass through newer images only
		.pipe($.newer(imagePaths.dest)) 
		.pipe($.imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest(imagePaths.dest))
        // log sass errors
        .on('error', err => {
            let projectPath = __dirname.replace( /\/gulp$/, '');
            $.util.log($.util.colors.red("CSS Error:"), $.util.colors.yellow(
                err.message.replace(projectPath, '.').replace(projectPath, '.')
            ));
        });
}