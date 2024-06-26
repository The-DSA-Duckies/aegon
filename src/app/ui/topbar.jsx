'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { UserButton, useSession } from '@clerk/nextjs';

/* current topbar height is 100px */

export default function Topbar(props) {
  const { session, loading } = useSession();
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
                fontSize: '18px',
                fontWeight: 'bold',
                textTransform: "none"
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
                fontSize: '18px',
                fontWeight: 'bold',
                textTransform: "none"
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
                fontSize: '18px',
                fontWeight: 'bold',
                textTransform: "none"
              }}
            >
              Assignments
            </Button>
          </Box>
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto',
              textTransform: "none"
            }}
          >
          {!session && !loading ? (
            <>
              <Button
                onClick={() => handleNavigate('/sign-in')}
                sx={{
                  color: '#1c65ee',
                  whiteSpace: 'nowrap',
                  padding: '0.4em 0.7em',
                  borderRadius: '5px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textTransform: "none",
                  '&:hover': { backgroundColor: 'white',},
                  border: "3px solid #1c65ee"
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => handleNavigate('/sign-up')}
                sx={{
                  color: 'white',
                  backgroundColor: '#1c65ee',
                  padding: '0.5em 0.4em',
                  whiteSpace: 'nowrap',
                  marginLeft: '2em',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  '&:hover': { backgroundColor: '#1c65ee',},
                  textTransform: "none",
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <Typography 
                variant="h6"
                component="div"
                sx={{
                  color: '#1c65ee',
                  whiteSpace: 'nowrap',
                  marginRight: '2em',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >
                Your Profile
              </Typography>
              <UserButton afterSignOutUrl='/'/>
            </>
          )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main">{props.children}</Box>
    </Box>
  );
}