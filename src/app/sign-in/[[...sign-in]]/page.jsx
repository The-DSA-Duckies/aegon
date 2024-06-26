import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Link from 'next/link'
import DoLogin from './doLogin';

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
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography 
                    variant="h2"
                    sx={{
                        marginRight: '7.5em',
                        color: '#1c65ee'
                    }}
                >
                    Login
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'grey',
                        marginRight: '15em'
                    }}
                >
                    Don't have an account? <Link href="/sign-up" style={{color: "#1165EF"}}>Sign up</Link>
                </Typography>
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <DoLogin/>
                </Box>
            </Box>
        </Box>
    );
}