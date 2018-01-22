import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
require('typeface-playfair-display');
require('./utils/modernizr-custom.js');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
