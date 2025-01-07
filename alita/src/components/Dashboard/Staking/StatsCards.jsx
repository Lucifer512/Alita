/* eslint-disable no-unused-vars */
import { Grid, Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ResponsiveInnerContainer } from './ResponsiveContainer';

const StatCard = styled(ResponsiveInnerContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  minHeight: '100px',
  [theme.breakpoints.up('md')]: {
    minHeight: '120px',
  },
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(24px, 5vw, 32px)',
  fontWeight: 700,
  textAlign: 'center',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SolLabel = styled(Typography)(({ theme }) => ({
  color: '#EA52D2',
  fontSize: 'clamp(12px, 1.5vw, 14px)',
  position: 'absolute',
  bottom: theme.spacing(1),
  right: theme.spacing(1),
}));

export default function StatsCards() {
  const theme = useTheme();

  const stats = [
    { title: 'Treasury Balance', value: '2554' },
    { title: 'Next Pay Out', value: '2.15' },
    { title: 'Total Earnings', value: '0.7' },
  ];

  return (
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={4} key={stat.title}>
          <StatCard>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: 500,
                mb: 1,
              }}
            >
              {stat.title}
            </Typography>
            <StatValue>{stat.value}</StatValue>
            <SolLabel>SOL</SolLabel>
          </StatCard>
        </Grid>
      ))}
    </Grid>
  );
}

