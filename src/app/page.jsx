import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Head from 'next/head';
import { TopBarLayout } from "./layout";

export default function Home() {
  return (
    <TopBarLayout>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh - 64px' }}>
        <Box sx={{ width: '50%', padding: '0 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ }}>
            Grading Made 
            <span style={{ color: '#1c65ee' }}> Simple</span>
          </Typography>
          <Typography variant="h4" sx={{ }}>
            Guppie Grader optimizes your
            <span style={{ color: '#fbac13' }}> grading workflow </span>
            by processing code and reports using advanced
            <span style={{ color: '#fbac13' }}> LLM technology</span>.
          </Typography>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Image src="/images/logo.png" alt="Your Image" width={500} height={500}/>
        </Box>
      </Box>
    </TopBarLayout>
  );
}
