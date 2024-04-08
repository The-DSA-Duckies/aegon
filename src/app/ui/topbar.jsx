'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

/* current topbar height is 100px */

export default function ButtonAppBar() {
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
                borderRadius: '5px',
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
                borderRadius: '5px',
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
                borderRadius: '5px',
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
              borderRadius: '5px',
              marginLeft: 'auto'
            }}
          >
            <Button
              onClick={() => handleNavigate('/login')}
              sx={{
                color: '#1c65ee',
                whiteSpace: 'nowrap',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => handleNavigate('/login/signup')}
              sx={{
                color: 'white',
                backgroundColor: '#1c65ee',
                whiteSpace: 'nowrap',
                marginLeft: '5em',
                fontWeight: 'bold',
                borderRadius: '5px',
                '&:hover': { backgroundColor: '#1c65ee',}
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}