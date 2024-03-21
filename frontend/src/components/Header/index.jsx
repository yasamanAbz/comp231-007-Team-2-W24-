import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "helpers/hooks/useOutsideClick";
import { NavLink } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
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

  return (
    <header className="flex items-center justify-between p-6">
      <button
        onClick={handleLogoClick}
        className="flex items-center w-12 h-12 rounded-2xl"
      >
        <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-2xl" />
        {/* <span className="ml-2 text-xl font-bold">App Logo</span> */}
      </button>

      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-[#434343]"
          }
        >
          Dashboard
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
          to="/video-calls"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-[#434343]"
          }
        >
          Video Calls
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
        </button>

        {showPopup && (
          <div
            ref={popupRef}
            className="absolute right-0 p-2 mt-2 bg-white rounded-lg shadow-lg w-fit top-full"
          >
            <p className="p-2 overflow-hidden cursor-pointer whitespace-nowrap overflow-ellipsis hover:bg-gray-100">
              Account Settings
            </p>
            <p className="p-2 overflow-hidden cursor-pointer whitespace-nowrap overflow-ellipsis hover:bg-gray-100">
              Log Out
            </p>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
