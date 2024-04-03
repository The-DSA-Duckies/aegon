'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

/* current topbar height is 100px */

export default function Topbar(props) {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'white'}}>
        <Toolbar sx={{ display: 'flex' }}>
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              width: 'min-content'
            }}
          >
            <img 
              src="/guppy_grader.png"
              alt="Logo"
              style={{
                width: '50%',
                height: '50%',
                marginRight: '1em',
                marginLeft: '-1em'
              }}
            />
            <Typography 
              variant="h5"
              component="div"
              sx={{
                color: 'black',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}
            >
              Guppie Grader
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '10em'
            }}
          >
            <Button 
              onClick={() => handleNavigate('/')}
              sx={{
                color: '#1c65ee',
                whiteSpace: 'nowrap',
                fontWeight: 'bold'
              }}
            >
              Home
            </Button>
            <Button 
              onClick={() => handleNavigate('/about-us')}
              sx={{
                color: '#1c65ee',
                whiteSpace: 'nowrap',
                marginLeft: '5em',
                fontWeight: 'bold'
              }}
            >
              About Us
            </Button>
            <Button
              onClick={() => handleNavigate('/assignments')}
              sx={{
                color: '#1c65ee',
                whiteSpace: 'nowrap',
                marginLeft: '5em',
                fontWeight: 'bold'
              }}
            >
              Assignments
            </Button>
          </Box>
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto'
            }}
          >
            <UserButton/>
            <Button
              onClick={() => handleNavigate('/sign-in')}
              sx={{
                color: '#1c65ee',
                whiteSpace: 'nowrap',
                fontWeight: 'bold'
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => handleNavigate('/sign-up')}
              sx={{
                color: 'white',
                backgroundColor: '#1c65ee',
                whiteSpace: 'nowrap',
                marginLeft: '5em',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#1c65ee',}
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main">{props.children}</Box>
    </Box>
  );
}