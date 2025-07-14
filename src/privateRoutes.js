import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken") || "";
  return accessToken.length > 0 ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
