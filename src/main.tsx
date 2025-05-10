import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ParallaxProvider>
    <StrictMode>
        <App />
    </StrictMode>,
  </ParallaxProvider>
);
