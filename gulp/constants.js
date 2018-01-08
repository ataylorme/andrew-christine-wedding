export const dirs = {
    src: 'src',
    dest: 'assets'
};

export const sassPaths = {
    src: `${dirs.src}/css/`,
    mainFile: `${dirs.src}/css/main.scss`,
    dest: `${dirs.dest}/css/`
};

export const imagePaths = {
    src: `${dirs.src}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    dest: `${dirs.dest}/img/`
};

export const JSpaths = {
    src: `${dirs.src}/js/`,
    mainFile: `${dirs.src}/js/main.js`,
    dest: `${dirs.dest}/js/`
};

export const $ = require('gulp-load-plugins')();

export const browserSync = require('browser-sync').create();