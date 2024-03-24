import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import { TopBarLayout } from "../layout";
import LoginTextField from '../ui/loginTextField';

export default function Page() {
    return (
        <TopBarLayout>
            <Box sx={{ display: 'flex', height: 'calc(100vh - 100px)'}}>
                <Box sx={{ backgroundColor: '#1d63d4', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Image src="/images/LoginDucks.png" alt="Landing page image" width={500} height={700}/>
                </Box>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h2" sx={{marginRight: '8em', color: '#1d63d4' }}>
                        Login
                    </Typography>
                    <Typography variant="h6" sx={{color: 'grey', marginRight: '15em'}}>
                        Don't have an account? <Link href="/login/signup">Sign up</Link>
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h4" sx={{paddingTop: '1em', fontWeight: 'bold', marginRight: '12em' }}>
                            Username<span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <LoginTextField/>
                        <Typography variant="h4" sx={{paddingTop: '1em', fontWeight: 'bold', marginRight: '12em' }}>
                            Password<span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <LoginTextField/>
                        <Button sx={{type: 'submit', fontSize: '2rem', padding: '0.5em 1em', margin: '1em', color: 'white', backgroundColor: '#1c65ee', whiteSpace: 'nowrap', fontWeight: 'bold', '&:hover': { backgroundColor: '#1c65ee'} }}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Box>
        </TopBarLayout>
    );
}