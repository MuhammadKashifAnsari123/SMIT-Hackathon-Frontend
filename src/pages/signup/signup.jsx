import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic client-side validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/signup", {
        name,
        email,
        password,
      });

      if (response.data.message) {
        setSuccess(response.data.message);
        setName("");
        setEmail("");
        setPassword("");
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Signup failed");
      } else {
        setError("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
          Create an Account
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
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
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
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
            placeholder="Enter a strong password"
            required
          />
        </div>
        <button
          type="submit"
           className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 focus:ring focus:ring-green-400"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? {" "}
          <a
            href="/login"
           className="text-green-600 hover:underline"
          >
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
