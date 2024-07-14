import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, performLogout } from './AuthSlice';  // Correct the import here

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  }

  const handleLogout = async (e) => {
    dispatch(performLogout());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {authState.loading && <p>Loading...</p>}
      {authState.error && <p>Error: {authState.error}</p>}
      {authState.isAuthenticated && <>
        <p>Welcome, {username}!</p>
        <button onClick={handleLogout}>Logout</button>  {/* Correct the onClick handler */}
      </>}
    </div>
  );
};

export default LoginForm;
