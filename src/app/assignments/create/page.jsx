import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import CreateAssignment from './createAssignment';

export default function Page() {
  return ( // width calc accounts for max sidebar
    <Box 
      sx={{ 
        display: 'flex',
        height: '100vh', 
        width: 'calc(100vw - 240px)'
      }}
    > 
      <Box 
        sx={{ 
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'center'
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
            Create an <span style={{ color: '#1d63d4' }}>Assignment</span>
          </span>
        </Typography>
        <Typography 
          variant="h4" 
          sx={{
            marginLeft: '1em',
            marginBottom: '10em'
          }}
        >
          Actually upload here soon!
        </Typography>
        <Image 
          src="/waves.png" 
          alt="Waves at bottom of left half"
          width={700}
          height={250}
        />
      </Box>
      <Box 
        sx={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'center'
        }}
      >
        <CreateAssignment/>
      </Box>
    </Box>
  );
}
  