import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "components/Dashboard";
import Messaging from "components/Messaging";
import VideoCalls from "components/VideoCalls";
import HealthTracking from "components/HealthTracking";
import Appointments from "components/Appointments";
import Header from "components/Header";
import "./index.css";

function App() {
  return (
    <Router>
      <div height="100hv">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/video-calls" element={<VideoCalls />} />
          <Route path="/health-tracking" element={<HealthTracking />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
