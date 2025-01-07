import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronDown, Info } from 'lucide-react';
import { ResponsiveContainer, ResponsiveButton } from './ResponsiveContainer';

const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
}));

const InfoColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

const InfoLabel = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  color: '#9C9C9C',
  fontSize: '14px',
});

const InfoIcon = styled('div')({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#EA52D2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  fontSize: '12px',
  cursor: 'pointer',
});

const Divider = styled(Box)({
  height: '1px',
  backgroundColor: '#C9D2D9',
  margin: '16px 0',
});

export default function RewardsCard() {
  return (
    <ResponsiveContainer>
      <ResponsiveButton
        component={Button}
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          justifyContent: 'space-between',
          width: '100%',
          mb: 2,
        }}
      >
        <img src="/Alita.png" alt="Alita" width={24} height={24} style={{ marginRight: '8px' }} />
        $ALITA STAKE REWARDS
        <ChevronDown size={20} />
      </ResponsiveButton>

      <Typography sx={{ color: '#9C9C9C', fontSize: '14px', textAlign: 'center', mb: 2 }}>
        0xcac2...658e
      </Typography>

      <Divider />

      <InfoRow>
        <InfoColumn>
          <InfoLabel>
            1 Day Rewards
            <InfoIcon><Info size={12} /></InfoIcon>
          </InfoLabel>
          <Typography sx={{ fontWeight: 500 }}>20%</Typography>
        </InfoColumn>

        <InfoColumn>
          <InfoLabel>
            AKR
            <InfoIcon><Info size={12} /></InfoIcon>
          </InfoLabel>
          <Typography sx={{ fontWeight: 500 }}>25%</Typography>
        </InfoColumn>

        <InfoColumn>
          <InfoLabel>
            Index
            <InfoIcon><Info size={12} /></InfoIcon>
          </InfoLabel>
          <Typography sx={{ fontWeight: 500 }}>1.25 SOL</Typography>
        </InfoColumn>
      </InfoRow>
    </ResponsiveContainer>
  );
}

