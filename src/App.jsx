import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext"; // If using AuthContext

const App = () => {
  return (
    <AuthProvider>  {/* Wrap your app in AuthProvider for authentication context */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />       {/* Login page */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          <Route path="/register" element={<Register />} /> {/* Register page */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
