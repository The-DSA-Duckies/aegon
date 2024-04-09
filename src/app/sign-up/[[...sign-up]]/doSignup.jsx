'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';

export default function DoSignup() {
  const router = useRouter();

    // State to manage the value of the input field
  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [passConfirmValue, setPassConfirmValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    // Function to handle changes in the input field
    const handleUserChange = (event) => {
        setUserValue(event.target.value);
    };

    const handlePassChange = (event) => {
        setPassValue(event.target.value);
    };

    const handlePassConfirmChange = (event) => {
        setPassConfirmValue(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User value: ', userValue);
        console.log('Pass value: ', passValue);
        
        // temporary hard coding inability to register new account
        if (passValue != passConfirmValue) {
            setErrorMessage('Password does not match confirmed password.');
        }
        else {
            setErrorMessage('Cannot create an account currently, please try again soon.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography 
              variant="h4"
              sx={{
                paddingTop: '1em',
                fontWeight: 'bold',
                marginRight: '12.5em'
              }}
            >
              Username<span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField 
              id="enter-user"
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
                marginRight: '12.5em'
              }}
            >
              Password<span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField 
              id="enter-pass"
              type="password"
              value={passValue}
              onChange={handlePassChange}
              fullWidth
              required
            />
            <Typography
              variant="h4"
              sx={{
                paddingTop: '1em',
                fontWeight: 'bold',
                marginRight: '8em'
              }}
            >
              Confirm Password<span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              id="enter-pass-confirm"
              type="password"
              value={passConfirmValue}
              onChange={handlePassConfirmChange}
              fullWidth
              required
            />
            <Button
              type="submit"
              sx={{
                fontSize: "2rem",
                padding: "0.2em 0.7em",
                color: "white",
                backgroundColor: "#1c65ee",
                borderRadius: "5px",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#1c65ee" },
                textTransform: "none",
                marginTop: "40px"
              }}
            >
              Sign Up
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