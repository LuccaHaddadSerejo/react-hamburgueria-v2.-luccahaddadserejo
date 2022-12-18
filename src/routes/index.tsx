import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoutes";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import StorePage from "../pages/Store";
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/store/:name/:id" element={<StorePage />} />
      </Route>
    </Routes>
  );
};
