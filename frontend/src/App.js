import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import Messaging from "./components/Messaging/index.jsx";
import VideoCall from "./pages/VideoCall/index.jsx";
import HealthTracking from "./components/HealthTracking/index.jsx";
import Appointments from "./components/Appointments/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

import "./index.css";

function App() {
  return (
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
  );
}

export default App;
