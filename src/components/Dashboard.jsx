import React from 'react';

function Dashboard({ financialData }) {
  // Check if financialData is available before accessing nested properties
  const isDataAvailable = financialData && financialData.rates && financialData.markets;

  return (
    <div className="dashboard">
      <h2>Financial Dashboard</h2>
      
      {/* Conditional Rendering if data is still loading */}
      {!isDataAvailable ? (
        <p>Loading financial data...</p>
      ) : (
        <>
          <div>
            <h3>Exchange Rates</h3>
            <p>USD to KES: {financialData.rates.usd_to_kes || 'Data not available'}</p>
            <p>BTC to USD: {financialData.rates.btc_to_usd || 'Data not available'}</p>
          </div>
          
          <div>
            <h3>Top Bank</h3>
            <p>
              {financialData.markets.topBank || 'Data not available'}: 
              {financialData.markets.performance || 'No performance data available'}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
