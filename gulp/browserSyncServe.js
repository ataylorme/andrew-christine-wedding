import {browserSync} from './constants';

export default () => {
    browserSync.init(
        {
            // see http://www.browsersync.io/docs/options/
            open: false,
			https: {
				key: '/Users/andrewtaylor/.valet/Certificates/andrew-and-christine.dev.key',
				cert: '/Users/andrewtaylor/.valet/Certificates/andrew-and-christine.dev.crt'
			},
			files: ['assets/**/*', '**/*.html', '**/*.php']
        }
    );
    }
