import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Messaging from "components/Messaging";
import VideoCall from "pages/VideoCall";
import HealthTracking from "components/HealthTracking";
import Appointments from "pages/Appointments";
import Header from "components/Header";
import Footer from "components/Footer";
import { AuthProvider } from "./contexts/AuthContext";

import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/video-calls" element={<VideoCall />} />
            <Route path="/health-tracking" element={<HealthTracking />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
