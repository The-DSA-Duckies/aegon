'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

export default function CreateAssignment() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

    // State to manage the value of the input field
  const [nameValue, setNameValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    // Function to handle changes in the input field
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
  };

    // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name value: ', nameValue);
    console.log('Type value: ', typeValue);
        
    // temporary disabling ability to create assignments
    setErrorMessage('Cannot create an assignment currently, please try again soon.');
  };

  return (
    <form onSubmit={handleSubmit}>
        <Typography 
          variant="h4" 
          sx={{
            paddingTop: '1em',
            fontWeight: 'bold',
            marginBottom: '0.5em',
            marginRight: '5em',
            whiteSpace: 'nowrap'
          }}
        >
            Name of Assignment<span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField 
          id="outlined-required" 
          value={nameValue}
          onChange={handleNameChange}
          required
        />
        <Typography 
          variant="h4"
          sx={{
            paddingTop: '1em',
            fontWeight: 'bold',
            marginBottom: '0.5em',
            marginRight: '5em',
            whiteSpace: 'nowrap'
          }}
        >
            Type of Assignment<span style={{ color: 'red' }}>*</span>
        </Typography>
        <div>
            <Select 
              value={typeValue}
              onChange={handleTypeChange}
              displayEmpty
              required
            >
              <MenuItem value="">Select a type</MenuItem>
              <MenuItem value="option1">Exam Pseudocode</MenuItem>
              <MenuItem value="option2">Project Code and Report</MenuItem>
            </Select>
        </div>
        <Button 
          type="submit"
          sx={{
            fontSize: '2rem',
            padding: '0.4em 0.8em',
            marginTop: '10em',
            marginRight: '2em',
            color: 'white',
            backgroundColor: '#1c65ee',
            borderRadius: '5px',
            whiteSpace: 'nowrap', 
            fontWeight: 'bold',
            textTransform: "none",
            '&:hover': { backgroundColor: '#1c65ee'}
          }}
        >
            Create Assignment
        </Button>
        {errorMessage && (
            <Typography variant="body1" color="red" sx={{ paddingTop: '1em' }}>
                {errorMessage}
            </Typography>
        )}
    </form>
  );
}