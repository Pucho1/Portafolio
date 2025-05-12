import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.css'
import App from './App.tsx'
import { PositionProvider } from './context/PositionContext.tsx';

createRoot(document.getElementById('root')!).render(
  <ParallaxProvider>
    <PositionProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </PositionProvider>
  </ParallaxProvider>
);
