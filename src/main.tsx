import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/libs/i18n/i18n';

import { ThemeProvider } from '@/providers/ThemeProvider.tsx';

import '@/styles/index.css';

import App from './app/App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
