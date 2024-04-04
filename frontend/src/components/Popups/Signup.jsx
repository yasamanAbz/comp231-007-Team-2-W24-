import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

// The signup form component
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("green");
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, firstName, lastName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token);
        setMessage("User added successfully!");
        setMessageColor("green");
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
      setMessageColor("[#ff5e5e]");
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
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="block p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004570]"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004570]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="block p-2 m-2 text-white bg-[#004570] rounded-lg"
        >
          Sign Up
        </button>
      </form>
      {message && (
        <p className={`text-${messageColor} text-center`}>{message}</p>
      )}
    </>
  );
};
export default SignupForm;
