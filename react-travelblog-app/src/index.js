import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './Blog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blog />, document.getElementById('root'));
registerServiceWorker();
