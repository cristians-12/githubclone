import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/registerpage";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages/homepage";
import ProtectedRoute from "./ProtectedRoute";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/loginpage";
import { ProfileSelected } from "./pages/profileSelected";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/profileSearch" element={<ProfileSelected/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
