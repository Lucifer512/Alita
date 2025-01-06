/* eslint-disable no-unused-vars */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow as MuiTableRow, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const stakerData = [
  { id: 1, address: "4NdjX...WsS9", totalStaked: 87, stakeRanking: 15, totalEarning: 35670 },
  { id: 2, address: "7GfRt...KpQv", totalStaked: 73, stakeRanking: 17, totalEarning: 35670 },
  { id: 3, address: "8JxLp...TzMn", totalStaked: 69, stakeRanking: 17, totalEarning: 35670 },
  { id: 4, address: "5HwEr...QbXz", totalStaked: 59, stakeRanking: 17, totalEarning: 35670 },
];

const TableRow = styled(MuiTableRow)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '10px',
  overflow: 'hidden',
  // '&:last-child td, &:last-child th': { border: 0 },
  '&:first-of-type tr' : { borderTopLeftRadius: '10px' },
  '&:last-of-type tr, &:last-of-type tr': { borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' },
}));

export function StakingTable() {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: '#BFDFF0', borderRadius: 2, border: '1px solid #ccc', p: 2 }}>
      <Table sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '0 10px' }} aria-label="staking table">
        <TableHead>
          <TableRow component="tr" sx={{ backgroundColor: 'white' }}>
            <TableCell>No</TableCell>
            <TableCell>Staker</TableCell>
            <TableCell>Total Staked</TableCell>
            <TableCell>Stake ranking</TableCell>
            <TableCell>Total earning</TableCell>
            <TableCell>More details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stakerData.map((staker) => (
            <TableRow component="tr" key={staker.id}>
              <TableCell component="th" scope="row">
                {staker.id}
              </TableCell>
              <TableCell>{staker.address}</TableCell>
              <TableCell>{staker.totalStaked}</TableCell>
              <TableCell>{staker.stakeRanking}</TableCell>
              <TableCell>{staker.totalEarning}</TableCell>
              <TableCell>
                <Button color="primary">more</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

