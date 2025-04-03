import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary.jsx';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/test`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };

    fetchData();
  }, [apiKey, backendUrl]);

  return (
    <ErrorBoundary>
      <div>
        <h1>Soko Huru</h1>
        <p>API Key: {apiKey}</p>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Data: {data ? JSON.stringify(data) : 'Loading...'}</p>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;