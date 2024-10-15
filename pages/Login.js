import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../styles/Login.css';
import logokapo from '../assets/logokapo.png';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



function LoginPage() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { user, setUser } = React.useContext(AuthContext);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(userCredential.user);
      navigate('/');
    } catch (e) {
      console.error("Error logging in: ", e);
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (e) {
      console.error("Error logging out: ", e);
    }
  }

  return (
    <div className="login-container">
      <img className="logokapo" src={logokapo} alt="Logokapo" />
      <h1>Σύνδεση Χρήστη</h1>
      <form onSubmit={handleLogin}>
        <TextField
          type="email"
          id="email"
          name="email"
          value={loginEmail}
          required
          placeholder='Email'
          onChange={(e) => setLoginEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          type="password"
          id="password"
          name="password"
          value={loginPassword}
          required
          placeholder='Κωδικός'
          onChange={(e) => setLoginPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

          <button type="submit" className='LoginButton'>Σύνδεση</button>
        <Link to="/register" className='RegisterButton'>Δημιουργία λογαριασμού</Link>
      </form>
    </div>
  );
}

export default LoginPage;