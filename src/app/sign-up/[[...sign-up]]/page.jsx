import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import DoSignup from './doSignup';

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
                    alt="Sign up duck image"
                    width={600}
                    height={450}
                />
            </Box>
            <Box
                sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography 
                    variant="h2"
                    sx={{
                        marginRight: '6.5em',
                        color: '#1d63d4'
                    }}
                >
                    Register
                </Typography>
                <Typography 
                    variant="h6"
                    sx={{
                        color: 'grey',
                        marginRight: '15em'
                    }}
                >
                    Already have an account? <Link href="/sign-in" style={{color: "#1165EF"}}>Sign in</Link>
                </Typography>
                <Box 
                    sx={{
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <DoSignup/>
                </Box>
            </Box>
        </Box>
    );
}