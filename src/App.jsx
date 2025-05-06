import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicPage from "./pages/PublicPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={isAuthenticated ? <AdminPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

