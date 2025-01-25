import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    // Basic client-side validation
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        email,
        password,
      });
  
      const { token, message } = response.data;
  
      if (token) {
        // Save token to localStorage
        localStorage.setItem("authToken", token);
        setSuccess(message || "Login successful!");
  
        // Clear input fields
        setEmail("");
        setPassword("");
  
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        setError("Invalid credentials.");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Login failed.");
      } else {
        setError("Network error. Please try again later.");
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-50 to-green-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
          Log In
        </h2>
        {error && (
          <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 border border-red-400 rounded-md">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-2 text-sm text-green-600 bg-green-100 border border-green-400 rounded-md">
            {success}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 focus:ring focus:ring-green-400"
        >
          Log In
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? {" "}
          <a
            href="/signup"
            className="text-green-600 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
