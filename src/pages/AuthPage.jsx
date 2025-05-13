// AuthPage.jsx - Регистрация и вход с валидацией и анимацией ошибок
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AuthPage.css';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin(!isLogin);

  const validateEmail = (value) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setShowError(false);

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      setShowError(true);
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      setShowError(true);
      return;
    }

    if (isLogin) {
      alert('Logged in successfully');
      navigate('/');
    } else {
      alert('Registered successfully');
      navigate('/');
    }
  };

  return (
    <div className='auth-page'>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={showError && !validateEmail(email) ? 'input-error' : ''}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={showError && password.trim().length < 6 ? 'input-error' : ''}
        />
        {error && <p className={`error-message ${showError ? 'visible' : ''}`}>{error}</p>}
        <button type='submit'>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p className='auth-toggle' onClick={toggleMode}>
        {isLogin ? 'Don’t have an account? Register' : 'Already have an account? Login'}
      </p>
    </div>
  );
}

export default AuthPage;
