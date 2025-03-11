import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import resetFirstStep from "../assets/reset-1.png";
import { useNavigate } from "react-router-dom";


export function ForgotenPassword() {
    const navigate = useNavigate()

function handleBack(){
    navigate('/login');
}
  return (
    <>
      <div className="forgoten-page">

        <div className="header-forgoten-page">
          <button className="back-button"><img src={backButton} alt="Back Button" onClick={handleBack}/></button>
        </div>

        <div className="forgoten-form">
          <img src={cafeLogo} className="LoginLogo" alt="Cafe Logo" />
          <h2>Zaboravili ste lozinku?</h2>
          <p>Unesite svoju email adresu i mi ćemo Vam <br />poslati instrukcije za resetovanje</p>

          <div className="input-field">
            <div className="input-field-box">
              <h2>Email</h2>
              <input type="text" placeholder="Unesite Email adresu" />
            </div>
          </div>

          <button className="resetButton">Resetuj lozinku</button>

          <div className="register-link">
            <img src={resetFirstStep} className="reset-step" alt="Reset First Step" />
          </div>

        </div>
      </div>
    </>
  );
}