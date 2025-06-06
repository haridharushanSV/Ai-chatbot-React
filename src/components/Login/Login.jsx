import React, { useState } from 'react';
import styles from './Login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // ✅ Hook to navigate programmatically

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      setMessage("Login successful!");
      navigate("/home"); // ✅ Navigate to /home
    } catch (error) {
      setMessage("Login failed: " + error.message);
    }
  };

  return (
    <div className={styles.log}>
      <div className={styles.head}>
        <h1>Login</h1>
      </div>
      <div className={styles.form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button onClick={handleLogin}>Login</button>
        <br />
        <label style={{ marginRight: '30px', paddingTop: '10px' }}>New User?</label>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
