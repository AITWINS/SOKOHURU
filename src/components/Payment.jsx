import { useState } from 'react';

function Payment({ user }) {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handlePay = async () => {
    setError('');  // Clear any previous error
    // Input validation
    if (!phone || !amount || isNaN(amount) || amount <= 0) {
      setError('Please enter a valid phone number and amount.');
      return;
    }

    try {
      const res = await fetch('/api/mpesa-pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, amount }),
      });

      if (!res.ok) {
        throw new Error('Payment request failed. Please try again later.');
      }

      const data = await res.json();
      if (data.pin) {
        setPin(data.pin);  // Set the PIN if returned from the server
      } else {
        setError('Unexpected response from the server.');
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="payment">
      <h2>MpesaPal Payment</h2>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePay}>Pay</button>

      {pin && <p>Your PIN: {pin}</p>}
    </div>
  );
}

export default Payment;
