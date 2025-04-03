import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18 and above
import App from './App.jsx';  // Import your main App component
import './index.css';  // If you have any CSS for your app

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root for rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
