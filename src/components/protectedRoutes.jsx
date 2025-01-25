import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("authToken"); // Token ko check karenge
  return token ? children : <Navigate to="/login" />; // Token hai to page dikhao, warna login page
};

export default PrivateRoute;
