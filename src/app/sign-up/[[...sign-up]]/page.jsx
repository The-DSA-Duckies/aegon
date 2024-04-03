import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image'
import { SignUp } from '@clerk/nextjs';

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
                    src="/signup_ducks.png"
                    alt="Signup duck image"
                    width={600}
                    height={425}
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
                <SignUp/>
            </Box>
            </Box>
    );
}