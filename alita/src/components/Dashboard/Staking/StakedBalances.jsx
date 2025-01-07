/* eslint-disable no-unused-vars */
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Info } from 'lucide-react';
import { ResponsiveContainer, ResponsiveInnerContainer } from './ResponsiveContainer';

const SectionTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
});

const TitleIcon = styled(Box)({
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const BalanceValue = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(24px, 5vw, 32px)',
  fontWeight: 700,
  color: '#000000',
  marginBottom: '4px',
}));

const TokenLabel = styled(Typography)({
  fontSize: '14px',
  color: '#EA52D2',
  marginBottom: '24px',
});

const Divider = styled(Box)({
  height: '1px',
  backgroundColor: '#C9D2D9',
  margin: '16px 0',
});

const GrayText = styled(Typography)({
  color: '#9C9C9C',
  fontSize: '14px',
});

export default function StakedBalances() {
  return (
    <ResponsiveContainer>
      <SectionTitle>
        <TitleIcon>🏛️</TitleIcon>
        <Typography variant="h6">Staked Balances</Typography>
        <IconButton size="small">
          <Info size={16} color="#EA52D2" />
        </IconButton>
      </SectionTitle>

      <ResponsiveInnerContainer>
        <BalanceValue>0</BalanceValue>
        <TokenLabel>ALITA</TokenLabel>
        <BalanceValue>0</BalanceValue>
        <TokenLabel>$ALITA</TokenLabel>
      </ResponsiveInnerContainer>

      <Divider />

      <Box sx={{ mt: 3 }}>
        <SectionTitle>
          <TitleIcon>⟳</TitleIcon>
          <Typography variant="h6">Rebase</Typography>
          <IconButton size="small">
            <Info size={16} color="#EA52D2" />
          </IconButton>
        </SectionTitle>

        <Typography variant="h6">in 3.1 hours</Typography>
        <GrayText>Approx. next rebase</GrayText>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">20%</Typography>
          <GrayText>Percent payout</GrayText>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
}

