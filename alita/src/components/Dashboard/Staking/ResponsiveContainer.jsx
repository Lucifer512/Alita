import { Box, styled } from '@mui/material';

export const ResponsiveContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: '1px solid #5F5F5F',
  borderRadius: '16px',
  backgroundColor: '#CFEAF8',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(1.5),
  },
}));

export const ResponsiveInnerContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid #00F0FF',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF',
  width: '100%',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
}));

export const ResponsiveButton = styled(Box)(({ theme }) => ({
  padding: '10px 20px',
  borderRadius: '20px',
  border: '1px solid #5F5F5F',
  fontSize: 'clamp(12px, 2vw, 14px)',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px',
  },
}));

