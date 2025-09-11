import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


