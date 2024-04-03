import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "helpers/hooks/useOutsideClick";
import { NavLink } from "react-router-dom";
import AuthPopup from "../Popups/Auth";
function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); // Create a ref for the popup

  useOutsideClick(popupRef, () => {
    if (showPopup) {
      setShowPopup(false); // Close the popup when clicking outside
    }
  });
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleUserIconClick = () => {
    setShowPopup(!showPopup);
  };
  const handleLogout = () => {
    // Logic to handle logout
    setIsAuthenticated(false);
    setShowPopup(false);
  };
  return (
    <header className="flex items-center justify-between p-6">
      <button
        onClick={handleLogoClick}
        className="flex items-center w-12 h-12 rounded-2xl"
      >
        <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-2xl" />
        <span className="ml-2 text-xl font-bold whitespace-nowrap overflow-ellipsis">
          Health Tracker
        </span>
      </button>

      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-[#434343]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/video-calls"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-[#434343]"
          }
        >
          Video Calls
        </NavLink>

        <NavLink
          to="/messaging"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-[#434343]"
          }
        >
          Messaging
        </NavLink>

        <NavLink
          to="/health-tracking"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-[#434343]"
          }
        >
          Health Tracking
        </NavLink>
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-[#434343]"
          }
        >
          Appointments
        </NavLink>
      </nav>
      <div className="relative">
        <button
          onClick={handleUserIconClick}
          className="flex items-center cursor-pointer"
        >
          <img src="/userIcon.jpg" alt="User Icon" className="w-6 h-auto" />
          <span className="p-2 text-sm">
            {!isAuthenticated ? `Hello, {userName}` : "Sign in/Register"}
          </span>
        </button>

        {showPopup && (
          <AuthPopup
            isAuthenticated={isAuthenticated}
            onClose={handleLogout}
            popupRef={popupRef}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
