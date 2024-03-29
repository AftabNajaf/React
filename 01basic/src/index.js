import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p>test in p</p>
  </React.StrictMode>
);

