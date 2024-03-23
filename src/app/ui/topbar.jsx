'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function ButtonAppBar() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white'}}>
        <Toolbar sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: 'min-content'}}>
            <img src="/images/logo.png" alt="Logo" style={{ width: '50%', height: '50%', marginRight: '1em', marginLeft: '-1em' }} />
            <Typography variant="h5" component="div" sx={{ color: 'black', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Guppie Grader
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10em'}}>
            <Button sx={{ color: '#1c65ee', whiteSpace: 'nowrap' }} onClick={() => handleNavigate('/assignments')}>
              Assignments
            </Button>
            <Button sx={{ color: '#1c65ee', whiteSpace: 'nowrap', marginLeft: '1em' }} onClick={() => handleNavigate('/about-us')}>
              About Us
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Button sx={{ color: '#1c65ee', whiteSpace: 'nowrap' }} onClick={() => handleNavigate('/login')}>
              Login
            </Button>
            <Button sx={{ color: 'white', backgroundColor: '#1c65ee', whiteSpace: 'nowrap', marginLeft: '1em', '&:hover': { backgroundColor: '#1c65ee',} }} onClick={() => handleNavigate('/login/signup')}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}