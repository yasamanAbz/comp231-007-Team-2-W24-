import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const SignInForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token, data.user);
        setEmail("");
        setPassword("");
        setMessage("");
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
      setMessage(error.message);
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
          type="password"
          placeholder="Password"
          className="block p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004570]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="block p-2 m-2 text-white bg-[#004570] rounded-lg hover:bg-[#004570]"
        >
          Sign In
        </button>
      </form>
      {message && <p className={`text-[#ff5e5e] text-center`}>{message}</p>}
    </>
  );
};

export default SignInForm;
