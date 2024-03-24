'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function DoLogin() {
    // State to manage the value of the input field
    const [userValue, setUserValue] = useState('');
    const [passValue, setPassValue] = useState('');

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
        // Do something with the input value, such as sending it to an API or processing it
        console.log('User value: ', userValue);
        console.log('Pass value: ', passValue);
    };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{paddingTop: '1em', fontWeight: 'bold', marginRight: '12em' }}>
        Username<span style={{ color: 'red' }}>*</span>
      </Typography>
      <TextField id="outlined-required" value={userValue} onChange={handleUserChange} fullWidth required/>
      <Typography variant="h4" sx={{paddingTop: '1em', fontWeight: 'bold', marginRight: '12em' }}>
        Password<span style={{ color: 'red' }}>*</span>
      </Typography>
      <TextField id="outlined-required" value={passValue} onChange={handlePassChange} fullWidth required/>
      <Button type="submit" sx={{fontSize: '2rem', padding: '0.5em 1em', margin: '1em', color: 'white', backgroundColor: '#1c65ee', whiteSpace: 'nowrap', fontWeight: 'bold', '&:hover': { backgroundColor: '#1c65ee'} }}>
        Login
      </Button>
    </form>
  );
}