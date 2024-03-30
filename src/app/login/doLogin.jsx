'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';

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

    // Function to handle form submission
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('User value: ', userValue);
      console.log('Pass value: ', passValue);
        
        // temporary hard-coded login account that doesn't actually restrict anything
      if (userValue == "test" && passValue == "12345678") {
          handleNavigate('/assignments');
      }
      else {
          setErrorMessage('Incorrect username or password. Please try again.');
      }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={passValue}
        onChange={handlePassChange}
        fullWidth
        required
      />
      <Button
        type="submit"
        sx={{
          fontSize: '2rem',
          padding: '0.5em 1em',
          marginTop: '1em',
          color: 'white',
          backgroundColor: '#1c65ee',
          whiteSpace: 'nowrap',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#1c65ee'}
        }}
      >
        Login
      </Button>
      {errorMessage && (
        <Typography 
          variant="body1"
          color="red"
          sx={{ paddingTop: '1em' }}
        >
          {errorMessage}
        </Typography>
      )}
    </form>
  );
}