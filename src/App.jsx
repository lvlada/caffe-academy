import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { AdminDashboard } from './components/AdminDashboard';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  function handleLogin(loginState, logedUser) {
    setIsLogin(loginState);
    setUser(logedUser);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage 
          checkLogin={handleLogin}
          isLogin={isLogin}
          userLogin={handleLogin}
          user={user}
        />} />
        <Route path="/login" element={<Login 
           checkLogin={handleLogin} 
        />} />
        <Route path="/profile" element={<Profile 
           user={user} 
        />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;