import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import StorePage from "../pages/Store";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
};
