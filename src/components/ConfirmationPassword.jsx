import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import resetFirstStep from "../assets/reset-4.png";
import { useNavigate } from "react-router-dom";

export function ConfirmationPassword({back}) {
  const navigate = useNavigate();


  function handleLogin() {
    navigate("/login");
  }
  function handleBack(){
    back();
  }
  return (
    <>
      <div className="forgoten-page">
        <div className="header-forgoten-page">
          <button className="back-button">
            <img src={backButton} alt="Back Button" onClick={handleBack}/>
          </button>
        </div>

        <div className="forgoten-form">
          <img src={cafeLogo} className="LoginLogo" alt="Cafe Logo" />
          <h2>Uspešno resetovanje lozinke!</h2>
          <p>
            Vaša lozinka je uspješno resetovana. <br /> Sada možete da se
            prijavite.
          </p>

          <button className="resetButton" onClick={handleLogin}>
            Prijavi se
          </button>

          <div className="register-link">
            <img
              src={resetFirstStep}
              className="reset-step"
              alt="Reset First Step"
            />
          </div>
        </div>
      </div>
    </>
  );
}
