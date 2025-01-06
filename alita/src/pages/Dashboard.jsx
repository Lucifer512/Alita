import { Box, Grid } from "@mui/material";
import DashboardLayout from "../layouts/DashboardLayout";
import { StatsCards } from "../components/Dashboard/StatsCards";
import { StakingTable } from "../components/Dashboard/StakingTable";
import { WalletSidebar } from "../components/Dashboard/WalletSidebar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div>
        <div
      className="font-onest p-[5rem] pb-0"
      style={{
        backgroundImage: "url('/Dashboard-Back.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" text-blue-950 p-4 flex">
        <div className="flex items-start justify-start w-[45%]">
          <img src="navRobot.svg" alt="Ok" width={100} height={100} />
        </div>
        <div className="flex items-center justify-start w-[55%]">
          <h1 className="font-onest text-4xl">Dashboard</h1>
        </div>
      </div>
      <DashboardLayout>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9}>
            <StatsCards />
            <StakingTable />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/Card1.svg"
                alt="Alita Mascot"
                width={100}
                height={100}
                style={{ opacity: 0.8 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <WalletSidebar />
          </Grid>
        </Grid>
      </DashboardLayout>
      <div>
        <div className="flex justify-end items-end gap-8 w-full py-10">
            <div className="flex justify-center items-center w-1/2">
            <img src="/Screen1.svg" alt="MeetAgent" />
            </div>
        </div>
    </div>
    </div>
    <div className="relative w-full h-[5rem] bg-customBlue">
        <div className="absolute -top-10 w-full h-full">
        <Footer />
        </div>
   
    </div>
    
    </div>
    
  );
}
