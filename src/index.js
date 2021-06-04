import React from 'react';
import ReactDOM from 'react-dom';
import './WWF.css';
import './App.css';
import './bootstrap-4.4.1.css';
import Header from './Header';
import App from './App';
import Footer from './Footer';

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
	<Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
