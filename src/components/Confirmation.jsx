import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import { useNavigate } from "react-router-dom";

export function Confirmation() {
  const navigate = useNavigate();

  function handleBack(){
    navigate("/login")
  }

  function handleHomePage(){
    navigate("/")
  }

  return (
    <>
      <div className="confirmation-page">

        <div className="header-confirmation-page">
          <button className="back-button"><img src={backButton} alt="Back Button" onClick={handleBack}/></button>
        </div>

        <div className="confirmation-form">
          <img src={cafeLogo} className="LoginLogo" alt="Cafe Logo" />

          <div className="userLogo"></div>
          
          <h2>Uspešno ste se registrovali!</h2>

          <p>Čestitamo! Uspešno ste se registrovali. <br />Sada možete uživati u brzom i jednostavnom <br />naručivanju omiljene kafe online!</p>

          <button className="backToHomePageButton" onClick={handleHomePage}>Idite na početnu stranicu</button>

        </div>
      </div>
    </>
  );
}