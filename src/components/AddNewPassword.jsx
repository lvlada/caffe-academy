import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import resetFirstStep from "../assets/reset-3.png";



export function AddNewPassword({back, forward}) {


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
          <h2>Postavi novu lozinku</h2>
          <p>Lozinka mora da sadrži najmanje 8 karaktera</p>

          <div className="input-field">
            <div className="input-field-box">
              <h2>Nova lozinka</h2>
              <input type="text" placeholder="Unesite novu lozinku" />
            </div>
            <div className="input-field-box">
              <h2>Ponovi lozinku</h2>
              <input type="text" placeholder="Ponovite lozinku" />
            </div>
          </div>

          <button className="resetButton" onClick={handleForward}>Resetuj lozinku</button>

          <div className="register-link">
            <img src={resetFirstStep} className="reset-step" alt="Reset First Step" />
          </div>

        </div>
      </div>
    </>
  );
}