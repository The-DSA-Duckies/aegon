'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter(); // added based on topbar code for button click navigation

  const handleNavigate = (path) => {
    router.push(path);
  };

  return ( // width calc accounts for max sidebar
    <Box 
      sx={{ 
        display: 'flex',
        height: '100vh', 
        width: 'calc(100vw - 240px)',
        flexDirection: 'column',
      }}
    > 
      <Box 
        sx={{ 
          height: '20%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'left',
          justifyContent: 'left',
          gap: '200px'
        }}
      >
        <Typography 
          variant="h2" 
          sx={{
            marginLeft: '1em',
            marginBottom: '1em',
            marginTop: '1em'
          }}
        >
          <span 
            style={{
              display: 'inline-block',
              borderBottom: '5px solid #1d63d4',
              marginBottom: '2px'
            }}
          > 
            Your <span style={{ color: '#1d63d4' }}>Assignments</span>
          </span>
        </Typography>
        <Button
          onClick={() => handleNavigate('/assignments/create')}
          sx={{
            fontSize: '1.75rem',
            padding: '0.25em 0.5em',
            marginTop: '2.5em',
            marginBottom: '1em',
            color: 'white',
            backgroundColor: '#1c65ee',
            whiteSpace: 'nowrap',
            borderRadius: '5px',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#1c65ee'}
          }}
        >
          Create New Assignment
        </Button>
      </Box>
      <Box 
        sx={{
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginLeft: '3em',
        }}
      >
        <List>
          {["Project 2"].map((item, index) => (
            <ListItem key={index} sx={{marginTop: '1em'}}>
              <ListItemText 
                primary= <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold'
                  }}
                >
                  {item}
                </Typography>
              />
              <ListItemText 
                primary= <Typography
                  variant="h4"
                  sx={{

                  }}
                >
                  Status: <span style={{ color: '#fbac13' }}>Graded by LLM</span>
                </Typography>
              />
              <ListItemButton
                onClick={() => handleNavigate('/assignments/speedgrader')}
                sx={{
                  width: 'auto',
                  minWidth: 'auto'
                }}
              >
                <ListItemIcon
                  sx={{
                    fontSize: "large",
                    color: "black"
                  }}
                >
                  <ExitToAppIcon/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

/*export default function Page() {
  return (
    <div>
      <p>This is the assignments page</p>
      <Link href="assignments/speedgrader">Link to Speedgrader</Link>
    </div>
  );
}
*/