import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { rootColors } from './constants/rootColor';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={{ rootColors }}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Елемент з id "root" не знайдений');
}
