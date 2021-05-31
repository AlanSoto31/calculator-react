import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/styles.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'),
);
