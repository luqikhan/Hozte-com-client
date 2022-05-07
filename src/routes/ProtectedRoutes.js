import React from "react";
// import useAuth from "app/hooks/useAuth";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  return <>{isAuthenticated ? children : <Navigate to="/login" replace />}</>;
};

export default AuthGuard;
