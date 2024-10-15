import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import TextField from '@mui/material/TextField';
import logokapo from '../assets/logokapo.png';
import {doc, setDoc } from "firebase/firestore"; 
import { auth, usersCollection } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button, Container, Grid, Typography } from '@mui/material';


function RegisterPage() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState(''); // New state variable for name
  const [registerSurname, setRegisterSurname] = useState(''); // New state variable for surname
  const [registerAm, setRegisterAm] = useState(''); // New state variable for id
  const [registerRole, setRegisterRole] = useState(''); // New state variable for role
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(userCredential.user);

      // Create a new user in your 'user' collection with the same UID
      await setDoc(doc(usersCollection, userCredential.user.uid), {
        // Add any additional fields you want
        email: registerEmail,
        password : registerPassword,
        name: registerName, // Store the name
        surname: registerSurname, // Store the surname
        am: registerAm, // Store the am
        idiothta: registerRole === 'student' ? 'student' : 'teacher', // Store the role
      });

      alert("Ο λογαριασμός δημιουργήθηκε με επιτυχία!"); // Show success message
      navigate('/'); // Redirect to home page
    } catch (e) {
      console.error("Error registering: ", e);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img className="logokapo" src={logokapo} alt="Logokapo" />
        <Typography component="h1" variant="h5">
          Εγγραφή Χρήστη
        </Typography>
        <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Όνομα"
                name="name"
                autoComplete="name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="surname"
                label="Επώνυμο"
                name="surname"
                autoComplete="surname"
                value={registerSurname}
                onChange={(e) => setRegisterSurname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="Αριθμός Μητρώου"
                name="id"
                autoComplete="id"
                value={registerAm}
                onChange={(e) => setRegisterAm(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl required fullWidth variant="outlined">
                <InputLabel id="role-label">Ιδιότητα</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  value={registerRole}
                  onChange={(e) => setRegisterRole(e.target.value)}
                  label="Ιδιότητα"
                >
                  <MenuItem value={'student'}>Φοιτητής</MenuItem>
                  <MenuItem value={'teacher'}>Καθηγητής</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Εγγραφή
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterPage;