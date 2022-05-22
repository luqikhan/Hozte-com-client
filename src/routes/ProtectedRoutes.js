import React from "react";
// import useAuth from "app/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ children }) => {
  let location = useLocation();
  const isAuthenticated = localStorage.getItem("token");

  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default AuthGuard;
