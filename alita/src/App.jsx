import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Features from "./components/Features";
import Roadmap from "./pages/Roadmap";
// import Stake from "./components/Stake";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Staking from "./components/Dashboard/Staking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/staking" element={<Staking />} />
      </Routes>
    </Router>
  );
}

export default App;
