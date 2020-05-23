import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './index.scss';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
