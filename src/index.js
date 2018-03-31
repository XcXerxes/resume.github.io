import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'animate.css'
import './assets/scss/index.scss'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
