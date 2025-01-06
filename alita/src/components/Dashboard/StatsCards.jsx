/* eslint-disable react/prop-types */

import { Grid, Paper, Typography, Box } from '@mui/material';

function StatsCard({ title, value, total }) {
  return (
    <Paper elevation={0} sx={{ p: 2,bgcolor:'transparent', borderRadius: 8, border: '1px solid', borderImage: 'linear-gradient(90deg, #00B4E7 0%, #00E8AB 100%) 1', height: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        <Typography variant="h4" component="div" fontWeight="bold">
          {value}
        </Typography>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
        out of {total}
      </Typography>
    </Paper>
  );
}

export function StatsCards() {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={4}>
        <StatsCard title="Your Staker Ranking" value={25} total={3506} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatsCard title="Total Staked" value={69} total={50149} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatsCard title="Total Rewards Redeemed" value={17} total={6285} />
      </Grid>
    </Grid>
  );
}

