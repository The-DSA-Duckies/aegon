import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { TopBarLayout } from "./layout";

export default function Home() {
  return (
    <TopBarLayout>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h1" sx={{paddingTop: '1.5em', fontWeight: 'bold' }}>
            Grading Made<br/>
            <span style={{ color: '#1c65ee' }}> Simple</span>
          </Typography>
          <Typography variant="h4" sx={{paddingTop: '1em', fontWeight: 'bold' }}>
            Guppie Grader optimizes<br/> your
            <span style={{ color: '#fbac13' }}> grading workflow </span>
            by<br/> processing code and reports<br/> using advanced
            <span style={{ color: '#fbac13' }}> LLM<br/> technology</span>.
          </Typography>
        </Box>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5em' }}>
          <Image src="/LandingDucks.png" alt="Landing page image" width={500} height={200}/>
        </Box>
      </Box>
    </TopBarLayout>
  );
}
