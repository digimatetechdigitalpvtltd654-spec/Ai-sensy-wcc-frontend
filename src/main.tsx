import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles/main.css';
import './styles/auth.css';
import './styles/chat_widget.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
