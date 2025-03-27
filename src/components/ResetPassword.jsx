import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import resetFirstStep from "../assets/reset-2.png";

export function ResetPassword({back, forward}) {


    function handleBack(){
      back();
  }
  function handleForward(){
    forward();
  }
  return (
    <>
      <div className="forgoten-page">

        <div className="header-forgoten-page">
          <button className="back-button"><img src={backButton} alt="Back Button" onClick={handleBack}/></button>
        </div>

        <div className="forgoten-form">
          <img src={cafeLogo} className="LoginLogo" alt="Cafe Logo" />
          <h2>Resetovanje lozinke</h2>
          <p>Poslali smo kod na <strong>anja04.p@gmail.com</strong></p>

          <div className="input-field">
            <div className="input-field-box-reset">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>

          <button className="resetButton" onClick={handleForward}>Nastavi</button>
          <p>Još uvek  Vam nije stigao kod? <a href="#">Pošalji opet</a></p>

          <div className="register-link">
            <img src={resetFirstStep} className="reset-step" alt="Reset First Step" />
          </div>

        </div>
      </div>
    </>
  );
}