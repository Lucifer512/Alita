/* eslint-disable no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { Typography, Select, MenuItem, Button, Box } from '@mui/material'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { ChevronDown } from 'lucide-react'

// Generate fluctuating data
const generateData = (baseValue, variance) => {
  return Array.from({ length: 10 }, (_, i) => ({
    value: baseValue + (Math.random() - 0.5) * variance
  }))
}

export function WalletSidebar() {
  const [currency, setCurrency] = useState('solana-sol')
  const [earningsData, setEarningsData] = useState(generateData(7.048, 1))
  const [spendingsData, setSpendingsData] = useState(generateData(2.013, 0.5))
  const [currentEarnings, setCurrentEarnings] = useState(7.048)
  const [currentSpendings, setCurrentSpendings] = useState(2.013)

  // Update data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newEarningsData = generateData(7.048, 1)
      const newSpendingsData = generateData(2.013, 0.5)
      
      setEarningsData(newEarningsData)
      setSpendingsData(newSpendingsData)
      setCurrentEarnings(newEarningsData[newEarningsData.length - 1].value)
      setCurrentSpendings(newSpendingsData[newSpendingsData.length - 1].value)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box sx={{ width: '100%', border: '1px solid', borderImage: 'linear-gradient(90deg, #00B4E7 0%, #00E8AB 100%) 1', borderRadius: '16px' }}>
      <Box sx={{ p: 6,pb:0,pt:2, borderRadius: '16px', width: '100%' }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
          My Wallet
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: 'rgba(0, 0, 0, 0.7)' }}>
            Your Balance
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}>
            15.03 <span style={{ color: '#ea52d2' }}>SOL</span>
          </Typography>
          
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            sx={{
              width: '100%',
              height: '3rem',
              borderRadius: '9999px',
              backgroundColor: 'white',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              '& .MuiSelect-select': {
                paddingY: '8px',
                paddingX: '20px',
              },
              '& .MuiSvgIcon-root': {
                right: '12px',
              }
            }}
            IconComponent={() => <ChevronDown style={{ color: 'black' }} />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <span>SOLANA</span>
                <span style={{ color: '#ea52d2' }}>SOL</span>
              </Box>
            )}
          >
            <MenuItem value="solana-sol">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <span>SOLANA</span>
                <span style={{ color: '#ea52d2' }}>SOL</span>
              </Box>
            </MenuItem>
          </Select>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#0ddb84' }} />
            <Typography variant="subtitle2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              Earnings
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0ddb84', mb: 2 }}>
            {currentEarnings.toFixed(3)} <span style={{ fontSize: '0.875rem' }}>SOL</span>
          </Typography>
          <Box sx={{ height: '4rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earningsData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0ddb84" 
                  strokeWidth={2} 
                  dot={{ fill: '#0ddb84', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#e15252' }} />
            <Typography variant="subtitle2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              Spendings
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e15252', mb: 2 }}>
            {currentSpendings.toFixed(3)} <span style={{ fontSize: '0.875rem' }}>SOL</span>
          </Typography>
          <Box sx={{ height: '4rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingsData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#e15252" 
                  strokeWidth={2} 
                  dot={{ fill: '#e15252', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: 6,pt:0,mt:0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Button
          fullWidth
          sx={{
            height: '3rem',
            borderRadius: '9999px',
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '1rem',
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        >
          Buy $ALITA
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{
            height: '3rem',
            borderRadius: '9999px',
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '1rem',
            borderColor: 'black',
            color: 'black',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          Redeem Airdrops
        </Button>
      </Box>
    </Box>
  )
}

