import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/userContext";

export const ProtectedRoute = () => {
  const { storeLoading, user } = useContext(UserContext);

  if (storeLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};
