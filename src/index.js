import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import ScrollToTop from './components/scrollToTop/scrollToTop'

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import 'tippy.js/dist/tippy.css';

ReactDOM.render(<BrowserRouter><ScrollToTop><App /></ScrollToTop></BrowserRouter>, document.getElementById('root'));
