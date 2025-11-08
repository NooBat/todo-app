import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Router } from './router';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
