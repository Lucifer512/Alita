/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AppBar, Toolbar, InputBase, Button, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  width: "360px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#787878",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#5f5f5f",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    fontSize: "16px",
    "&::placeholder": {
      color: "#787878",
      opacity: 1,
    },
  },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? "#d93de3" : "#000000",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  "&:hover": {
    backgroundColor: "transparent",
    opacity: 0.8,
  },
}));

const ConnectWalletButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#d93de3",
  color: "white",
  textTransform: "none",
  borderRadius: "24px",
  padding: "8px 24px",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#c22dd2",
  },
}));

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#CFEAF8",
          boxShadow: "none",
          borderRadius: "12px",
          border: "1px solid #ccc",
          py: 1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            py: 1,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find something here..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <NavButton
              active={1}
              onClick={() => handleNavigation("/dashboard")}
            >
              Dashboard
            </NavButton>
            <NavButton onClick={() => handleNavigation("/staking")}>
              Staking
            </NavButton>
            <NavButton onClick={() => handleNavigation("/redeem")}>
              Redeem
            </NavButton>
            <NavButton onClick={() => handleNavigation("/")}>Home</NavButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src="/Dashboard-Head.svg"
              alt="Alita AI"
              sx={{ height: 40, width: 40 }}
            />
            <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: "#CFEAF8",
          border: "1px solid black",
          borderColor: "divider",

          width: "100%",
          marginTop: "0.3rem",
        }}
      >
        {children}
      </Box>
      
    </Box>
  );
}
