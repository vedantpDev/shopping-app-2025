import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken") || "";
  return accessToken.length > 0 ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
