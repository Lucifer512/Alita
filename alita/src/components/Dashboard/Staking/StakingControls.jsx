/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronDown } from 'lucide-react';
import { ResponsiveContainer, ResponsiveInnerContainer, ResponsiveButton } from './ResponsiveContainer';

const HeaderIcon = styled('div')({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#EA52D2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',
});

const AmountInput = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  padding: '4px',
  marginBottom: theme.spacing(1.5),
}));

const Input = styled('input')({
  border: 'none',
  textAlign: 'center',
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  backgroundColor: 'transparent',
  '&:focus': {
    outline: 'none',
  },
});

export default function StakingControls() {
  const [amount, setAmount] = useState(200500);

  const handleAmountChange = (change) => {
    setAmount((prevAmount) => Math.max(0, prevAmount + change));
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <HeaderIcon>
          <Typography sx={{ color: '#FFFFFF', fontSize: '16px' }}>$</Typography>
        </HeaderIcon>
        <Typography sx={{ fontWeight: 500 }}>Staking</Typography>
      </Box>

      <ResponsiveButton
        component={Button}
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          justifyContent: 'space-between',
          width: '100%',
          mb: 3,
        }}
      >
        <img src="/Alita.png" alt="Alita" width={24} height={24} style={{ marginRight: '8px' }} />
        Stake $ALITA
        <ChevronDown size={20} />
      </ResponsiveButton>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}>
          <HeaderIcon>
            <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>○</Typography>
          </HeaderIcon>
          <Typography component="span" sx={{ color: '#000000' }}>
            Receive SOL Every...
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {['1 Days', '2 Days', '3 Days'].map((day) => (
            <Grid item xs={4} key={day}>
              <ResponsiveButton
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  width: '100%',
                }}
              >
                {day}
              </ResponsiveButton>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}>
          <HeaderIcon>
            <Typography sx={{ color: '#FFFFFF', fontSize: '14px' }}>□</Typography>
          </HeaderIcon>
          <Typography component="span" sx={{ color: '#000000' }}>
            Amount in $ALITA
          </Typography>
        </Box>
        <AmountInput>
          <ResponsiveButton sx={{ minWidth: '40px', width: '40px', height: '40px', p: 0 }} onClick={() => handleAmountChange(-1000)}>-</ResponsiveButton>
          <Input
            type="text"
            value={amount.toLocaleString()}
            onChange={(e) => setAmount(parseInt(e.target.value.replace(/,/g, ''), 10) || 0)}
          />
          <ResponsiveButton sx={{ minWidth: '40px', width: '40px', height: '40px', p: 0 }} onClick={() => handleAmountChange(1000)}>+</ResponsiveButton>
        </AmountInput>
        <Grid container spacing={1}>
          {['25%', '50%', 'Max'].map((percent) => (
            <Grid item xs={4} key={percent}>
              <ResponsiveButton
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  width: '100%',
                }}
              >
                {percent}
              </ResponsiveButton>
            </Grid>
          ))}
        </Grid>
      </Box>

      <ResponsiveInnerContainer
        sx={{
          backgroundColor: '#FFFFFF',
          textAlign: 'center',
          color: '#000000',
          fontWeight: 500,
        }}
      >
        Insufficient Balance
      </ResponsiveInnerContainer>
    </ResponsiveContainer>
  );
}

