import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
require('typeface-open-sans');
require('typeface-oswald');
require('./utils/modernizr-custom.js');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();