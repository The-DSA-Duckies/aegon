'use client'
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import AuthLogin from './authLogin';

export default function DoLogin() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

    // State to manage the value of the input field
  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    // Function to handle changes in the input field
  const handleUserChange = (event) => {
    setUserValue(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassValue(event.target.value);
  };

  return (
    <div>
      <Typography 
        variant="h4"
        sx={{
          paddingTop: '1em',
          fontWeight: 'bold',
          marginRight: '12em'
        }}
      >
        Username<span style={{ color: 'red' }}>*</span>
      </Typography>
      <TextField 
        id="outlined-required"
        value={userValue}
        onChange={handleUserChange}
        fullWidth
        required
      />
      <Typography
        variant="h4"
        sx={{
          paddingTop: '1em',
          fontWeight: 'bold',
          marginRight: '12em'
        }}
      >
        Password<span style={{ color: 'red' }}>*</span>
      </Typography>
      <TextField 
        id="outlined-required"
        type="password"
        value={passValue}
        onChange={handlePassChange}
        fullWidth
        required
      />
      <AuthLogin
        userValue={userValue}
        passValue={passValue}
        setErrorMessage={setErrorMessage}
        handleNavigate={handleNavigate}
      />
      {errorMessage && (
        <Typography 
          variant="body1"
          color={errorMessage == "complete" ? "green" : "red"}
          sx={{ paddingTop: '1em' }}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  );
}