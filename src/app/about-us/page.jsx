import Typography from '@mui/material/Typography';
import { TopBarLayout } from "../layout";

export default function Page() {
  return (
      <TopBarLayout>
        <Typography variant="h4" sx={{paddingTop: '1em' }}>
            Coming Soon!
        </Typography>
      </TopBarLayout>
  );
}