import React, { useState } from 'react';
import styles from './Login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast, Bounce } from 'react-toastify';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Error: Please enter your email and password to login.');

  const navigate = useNavigate(); // ✅ Hook to navigate programmatically
  const handlesignup = () => {
    navigate("/signup"); // ✅ Navigate to /signup
    setMessage(""); // Clear message on redirect
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      setMessage("Login successful!");
      navigate("/home"); // ✅ Navigate to /home
    } catch (error) {
      setMessage("Login failed: " );
    }
  };
  const handleForgotPassword = async () => {
    if (!username) {
      setMessage("Please enter your email to reset password.");
      return;
    }
  
    try {
      await sendPasswordResetEmail(auth, username);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage("Failed to send reset email: " + error.message);
    }
  };
  const notify = () => 
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
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
        <button className='logbttonn' onClick={() =>{handleLogin();notify();}} >Login</button>
        <p style={{ color: 'black', cursor: 'pointer' }} onClick={() => { handleForgotPassword(); notify(); }}>
  Forgot Password?
</p>
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          />
        <br />
        
            
        <a 
          href="/signup" 
          style={{ 
            marginTop: '10px', 
            display: 'inline-block', 
            textDecoration: 'none', 
            color: '#0077ff',
            fontWeight: 'bold'
          }}
          >
  New User?  Sign Up
</a>

      </div>
    </div>
  );
}

export default Login;
