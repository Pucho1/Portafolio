// import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';


import './index.css';
import App from './App.tsx';
import './assets/i18n.ts';
import { PositionProvider } from './context/PositionContext.tsx';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <PositionProvider>
        <App />
      </PositionProvider>
    </BrowserRouter>
);
