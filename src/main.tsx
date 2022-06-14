import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './global/styles/normalize.scss';
import './global/styles/container.scss';
import './global/styles/reusable.scss';
import './global/styles/typography.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
