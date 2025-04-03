import React, { useState } from 'react';

const Login = ({ onLogin, setError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');  // New state for gender

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !gender) {
      setError('All fields are required.');
      return;
    }

    // Here, you would call your API to validate and fetch user data
    const mockUser = {
      username: email,
      gender: gender,  // Include gender in user data
    };

    // Simulating a successful login
    const token = 'dummyToken'; // Use an actual token from the API if necessary
    onLogin(token, mockUser);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
