import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image'
import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                height: 'calc(100vh - 100px)'
            }}
        >
            <Box 
                sx={{ 
                    backgroundColor: '#1d63d4',
                    width: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    src="/login_ducks.png"
                    alt="Login duck image"
                    width={500}
                    height={700}
                />
            </Box>
            <Box 
                sx={{ 
                    width: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <SignIn/>
            </Box>
            </Box>
    );
}