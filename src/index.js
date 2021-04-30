import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/utility.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Service from './component/Service';
import Knowledge from './component/Knowledge'
import Recommand from './component/recommand'
import Active from './component/Active'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Service/>
    <Knowledge/>
    <Recommand/>
    <Active/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
