import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../../../themes/staking/theme'
import StakingDashboard from './StakingDashboard'

function Staking() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StakingDashboard />
    </ThemeProvider>
  )
}

export default Staking;

