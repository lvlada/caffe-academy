import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import { useNavigate } from "react-router-dom";


export function RegisterPage() {
  const navigate = useNavigate();

  function handleBack(){
    navigate("/login")
  }

  return (
    <>
      <div className="register-page">

        <div className="header-register-page">
          <button className="back-button"><img src={backButton} alt="Back Button" onClick={handleBack}/></button>
        </div>

        <div className="register-form">
          <img src={cafeLogo} className="LoginLogo" alt="Cafe Logo" />
          <h2>Registruj se</h2>

          <div className="input-field">
            <div className="input-field-box">
              <h2>Ime i Prezime</h2>
              <input type="text" placeholder="Unesite Ime i Prezime" />
            </div>

            <div className="input-field-box">
              <h2>Email</h2>
              <input type="text" placeholder="Unesite Email adresu" />
            </div>

            <div className="input-field-box">
              <h2>Lozinka</h2>
              <input type="password" placeholder="Unesite lozinku" />
            </div>

            <div className="input-field-box">
              <h2>Potvrdite Lozinku</h2>
              <input type="password" placeholder="Potvrdite lozinku" />
            </div>
          </div>

          <button className="registerButton">Registruj se</button>

          <div className="login-link">
            <p>Već imate kreiran nalog?</p>
            <a href="/login">Prijavi se</a>
          </div>

        </div>
      </div>
    </>
  );
}