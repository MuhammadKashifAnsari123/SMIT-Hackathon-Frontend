import React from "react";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    alert("Logged out successfully!");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen flex flex-col justify-between">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">My App</h2>
        <ul>
          <li className="mb-2">
            <a href="/dashboard" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="/profile" className="block p-2 rounded hover:bg-gray-700">
              Profile
            </a>
          </li>
          <li className="mb-2">
            <a href="/settings" className="block p-2 rounded hover:bg-gray-700">
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
