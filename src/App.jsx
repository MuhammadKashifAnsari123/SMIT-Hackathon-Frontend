import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./Login";
import Admin from "./pages/admin/admin";
// import User from "./pages/user/user";
import Teacher from "./pages/teacher/teacher";
import { AuthContext } from "./context/AuthContext";
import Cookies from "js-cookie";
import Students from "./pages/students/students";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import PrivateRoute from "./components/protectedRoutes";

function App() {

  const { user } = useContext(AuthContext);

  const token = localStorage.getItem("authToken");
  // console.log("user=>", user);
  // console.log("token=>", Cookies.get("token"));
  return (
    <Routes>
      {/* <Route path="/" element={user ? <Navigate to={"/user"} /> : <Login />} /> */}
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Header" element={<Header/>} />
      <Route path="/Sidebar" element={<Sidebar/>} />


<Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={user ? <Students /> : <Navigate to={"/"} />} />
      <Route path="/teacher" element={<Teacher />} />
    </Routes>
  );
}

export default App;
