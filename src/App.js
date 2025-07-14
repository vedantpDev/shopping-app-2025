import { Card, CardContent } from "@mui/material";
import "./App.css";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<PrivateRoutes>home</PrivateRoutes>} />
      </Routes>
    </div>
  );
}

export default App;
