// AuthPopup.js
import React, { useState } from "react";
import Signup from "./Signup";
import SignInForm from "./SignIn";
const AuthPopup = ({ isAuthenticated, onClose, popupRef }) => {
  const [showSignIn, setShowSignIn] = useState(true);
  return (
    <div
      ref={popupRef}
      className="absolute right-0 p-2 mt-2 bg-white rounded-lg shadow-lg w-fit top-full"
      style={{ zIndex: 1 }}
    >
      {isAuthenticated ? (
        <>
          <p className="p-2 overflow-hidden cursor-pointer whitespace-nowrap overflow-ellipsis hover:bg-gray-100">
            Account Settings
          </p>
          <p
            className="p-2 overflow-hidden cursor-pointer whitespace-nowrap overflow-ellipsis hover:bg-gray-100"
            onClick={onClose}
          >
            Log Out
          </p>
        </>
      ) : showSignIn ? (
        <div className="p-4 bg-white rounded-lg ">
          <h3 className="mb-4 text-lg font-semibold text-center">Sign In</h3>
          <div className="flex flex-col space-y-2">
            <SignInForm />
            <p
              className="p-2 text-center text-[#004570] cursor-pointer"
              onClick={() => setShowSignIn(false)}
            >
              Don't have an account? Register here
            </p>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-white rounded-lg">
          <h3 className="mb-4 text-lg font-semibold text-center">Sign Up</h3>
          <div className="flex flex-col space-y-2">
            <Signup />
            <p
              className="p-2 text-center text-[#004570] cursor-pointer hover:text-[#004570]"
              onClick={() => setShowSignIn(true)}
            >
              Already have an account? Login here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPopup;
