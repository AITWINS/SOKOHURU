import { useState, useEffect } from 'react';
import axios from 'axios';

function ExchangeRates() {
  const [rates, setRates] = useState(null); // Initially set to null to check if data is loaded
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('http://localhost:3001/rates');
        setRates(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Failed to fetch rates:', error);
        setError('Failed to fetch exchange rates. Please try again later.');
        setLoading(false);
      }
    };
    fetchRates();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <p>Loading exchange rates...</p>; // Show loading message while fetching
  }

  if (error) {
    return <p>{error}</p>; // Show error message if something goes wrong
  }

  return (
    <div>
      <h2>Live Exchange Rates</h2>
      <p>BTC/USD: {rates?.bitcoin?.usd || 'Data not available'}</p>
      <p>ETH/KES: {rates?.ethereum?.kes || 'Data not available'}</p>
    </div>
  );
}

export default ExchangeRates;
