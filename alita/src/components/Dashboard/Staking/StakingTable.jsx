import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ResponsiveContainer } from "./ResponsiveContainer";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: "#BFDFF0",
  borderRadius: "12px",
  padding: theme.spacing(2),
  "& .MuiTableCell-root": {
    borderBottom: "1px solid #C9D2D9",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
}));

const HeaderCell = styled(TableCell)({
  color: "#000000",
  fontWeight: 500,
  fontSize: "14px",
});

const BodyCell = styled(TableCell)({
  color: "#000000",
  fontSize: "14px",
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "10px",
  marginBottom: theme.spacing(2),
  "&:last-child td, &:last-child th": { border: 0 },
  "& > *": {
    borderBottom: "unset",
  },
}));

export default function StakingTable() {
  const rows = [
    {
      id: "29842",
      player: "6KpTf...NsRw",
      staked: "4212",
      totalStaked: "41",
      payout: "4.96",
    },
    {
      id: "29841",
      player: "3LtWx...VpYs",
      staked: "422",
      totalStaked: "43",
      payout: "4.96",
    },
    {
      id: "29840",
      player: "2QrNp...JsTk",
      staked: "42",
      totalStaked: "4",
      payout: "4.96",
    },
    {
      id: "29839",
      player: "9XvHr...MsPq",
      staked: "4",
      totalStaked: "521",
      payout: "4.96",
    },
  ];

  return (
    <ResponsiveContainer>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Staking Table
      </Typography>
      <StyledTableContainer>
        <Table sx={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
          <TableHead>
            <TableRow>
              <HeaderCell>No</HeaderCell>
              <HeaderCell>Player</HeaderCell>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Staked</HeaderCell>
              <HeaderCell>Total Staked</HeaderCell>
              <HeaderCell>Payout</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.id}>
                <BodyCell>{index + 1}</BodyCell>
                <BodyCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {row.player}
                  </Box>
                </BodyCell>
                <BodyCell>{row.id}</BodyCell>
                <BodyCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      {row.staked}
                    </Box>
                    <Box sx={{ width: "70%" }}>
                      <img
                        src="/StakingTable-Row1.svg"
                        alt="Alita"
                        width={20}
                        height={20}
                      />
                    </Box>
                  </Box>
                </BodyCell>
                <BodyCell>
                <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      {row.totalStaked}
                    </Box>
                    <Box sx={{ width: "70%" }}>
                      <img
                        src="/StakingTable-Row1.svg"
                        alt="Alita"
                        width={20}
                        height={20}
                      />
                    </Box>
                  </Box>
                </BodyCell>
                <BodyCell><Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      {row.payout}
                    </Box>
                    <Box sx={{ width: "70%" }}>
                      <img
                        src="/StakingTable-Row2.svg"
                        alt="Alita"
                        width={20}
                        height={20}
                      />
                    </Box>
                  </Box></BodyCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </ResponsiveContainer>
  );
}
