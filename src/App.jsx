import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./components/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/pages/LoginPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { AdminDashboard } from "./components/AdminDashboard";
import { RegisterPage } from "./components/RegisterPage";
import { ForgotenPassword } from "./components/ForgotenPassword";
import { StatusPage } from "./components/pages/StatusPage";
import { Confirmation } from "./components/Confirmation";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/password-reset" element={<ForgotenPassword />} />
          <Route path="/status-page" element={<StatusPage />} />
          <Route path="/confirmation-page" element={<Confirmation />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
