import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

// The signup form component
const SignupForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, firstName, lastName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token, data.user);
        // Clear the input fields
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setMessage("Sign up failed");
    }
  };

  return (
    <>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="block p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004570]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          className="block p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004570]"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="block p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004570]"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004570]"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="block p-2 m-2 text-white bg-[#004570] rounded-lg"
        >
          Sign Up
        </button>
      </form>
      {message && <p className={`text-[#ff5e5e] text-center`}>{message}</p>}
    </>
  );
};
export default SignupForm;
