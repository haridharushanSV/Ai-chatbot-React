import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import
import { ToastContainer, toast, Bounce } from 'react-toastify';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Error: Please enter your email and password to signup.');

  const navigate = useNavigate(); // ✅ Hook to navigate programmatically
 
  const handlesignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      setMessage("Signup successful!");
      navigate("/home");
    } catch (error) {
      setMessage("Signup failed: " + error.message);
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
        <h1>SignUp</h1>
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
        <button onClick={() => { handlesignup(); notify(); }}>signup</button>
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
      </div>
    </div>
  );
}

export default Signup;
