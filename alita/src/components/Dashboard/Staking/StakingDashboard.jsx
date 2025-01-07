import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from './Navigation.jsx';
import StakingControls from './StakingControls.jsx';
import RewardsCard from './RewardsCard.jsx';
import StatsCards from './StatsCards.jsx';
import StakingTable from './StakingTable.jsx';
import StakedBalances from './StakedBalances.jsx';
import { ResponsiveContainer } from './ResponsiveContainer.jsx';

const StakingDashboardWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundImage: 'url(/Dashboard-Back.svg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
  '& > .MuiGrid-item': {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
}));

export default function StakingDashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StakingDashboardWrapper>
      <Container maxWidth="xl" sx={{bgcolor: 'transparent'}}>
        <Typography variant="h1" align="center" gutterBottom>
          Staking StakingDashboard
        
        </Typography>
        <Navigation />
        <ResponsiveContainer>
          <ContentGrid container spacing={isMobile ? 2 : 3}>
            <Grid item xs={12} md={3}>
              <StakingControls />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: { xs: 2, sm: 3 }
              }}>
                <StatsCards />
                <RewardsCard />
                <Typography
                  sx={{
                    color: '#EA52D2',
                    fontSize: { xs: '12px', sm: '14px' },
                    backgroundColor: 'rgba(234, 82, 210, 0.1)',
                    padding: { xs: '6px 12px', sm: '8px 16px' },
                    borderRadius: '20px',
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                  }}
                >
                  Pending 0
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <StakedBalances />
              </Box>
            </Grid>
          </ContentGrid>
          {isTablet && (
            <Box sx={{ mt: { xs: 2, sm: 3 } }}>
              <StakedBalances />
            </Box>
          )}
          <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
            <StakingTable />
          </Box>
        </ResponsiveContainer>
      </Container>
    </StakingDashboardWrapper>
  );
}

