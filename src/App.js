import { Card, CardContent } from "@mui/material";
import "./App.css";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import Home from "./page/Home";
import PublicRoutes from "./publicRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <RegisterPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
