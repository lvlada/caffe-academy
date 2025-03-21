import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import { useNavigate } from 'react-router-dom';
import users from "../data/users.json";
import { useState } from 'react';
import { useAuth } from "./AuthContext";


export function Login() {

  const {handleLogin} = useAuth();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  function handleBack() {
      navigate('/'); 
  }

  function handleLoginPage() {
    const user = users.find(user => user.email === userEmail && user.password === userPassword);
    if(user) {
      handleLogin(true, user);
      navigate('/');
    } else {
      alert("Pogrešan email ili lozinka");
    }
  }

  return (
    <>
      <div className="login-page">

        <div className="header-login-page">
          <button className="back-button"><img src={backButton} alt="Back Button" onClick={handleBack}/></button>
        </div>

        <div className="login-form">
          <img src={cafeLogo} className="LoginLogo" alt="Cafe Logo" />
          <h2>Prijavi se</h2>

          <div className="input-field">
            <div className="input-field-box">
              <h2>Email</h2>
              <input 
              type="text" 
              placeholder="Unesite Email adresu" 
              name="email" 
              onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div className="input-field-box">
              <h2>Lozinka</h2>
              <input 
              type="password" 
              placeholder="Unesite lozinku" 
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div className="forgot-your-pass">
            <a href="/password-reset">Zaboravili ste lozinku?</a>
          </div>

          <button className="loginButton" onClick={handleLoginPage}>Prijavi se</button>

          <div className="register-link">
            <p>Još uvek nemate kreiran nalog?</p>
            <p>
            <a href="/register">Registrujte se</a>
            </p>
       
          </div>

        </div>
      </div>
    </>
  );
}