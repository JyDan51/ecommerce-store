// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/AuthPage.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Enter your email and password');
      return;
    }

    try {
      // Simulate API request (replace with real API request)
      const fakeToken = 'fake-jwt-token';
      localStorage.setItem('token', fakeToken);

      // Redirect to homepage after login
      navigate('/');
    } catch (err) {
      setError('Authentication error. Please check your credentials.');
    }
  };

  return (
    <div className="auth-page">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <div className="auth-toggle">
        {isLogin ? (
          <p>
            Don't have an account? <button onClick={toggleMode}>Sign Up</button>
          </p>
        ) : (
          <p>
            Already have an account? <button onClick={toggleMode}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
}
