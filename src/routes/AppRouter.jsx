import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";

export default function AppRouter() {
  const isAuth = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={isAuth ? <AdminPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
