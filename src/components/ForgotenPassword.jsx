import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import resetFirstStep from "../assets/reset-1.png";
import { useNavigate } from "react-router-dom";
import { ResetPassword } from "./ResetPassword";
import { AddNewPassword } from "./AddNewPassword";
import { ConfirmationPassword } from "./ConfirmationPassword";
import { useState } from "react";



export function ForgotenPassword() {
    const navigate = useNavigate();
    const [steps, setSteps] = useState(0);


function handleBack(){
    navigate('/login');
}
function handleStepsForward() {
  setSteps((cur) => (cur < 3 ? cur + 1 : cur));
}

function handleStepsBack() {
  setSteps((cur) => (cur > 0 ? cur - 1 : cur));
}
  return (
    <>
    { steps === 0 &&
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

          <button className="resetButton" onClick={handleStepsForward}>Resetuj lozinku</button>

          <div className="register-link">
            <img src={resetFirstStep} className="reset-step" alt="Reset First Step" />
          </div>

        </div>
      </div>
      }
      { steps === 1 && <ResetPassword back = {handleStepsBack} forward ={handleStepsForward}/>}
      { steps === 2 && <AddNewPassword back = {handleStepsBack} forward ={handleStepsForward}/>}
      { steps === 3 && <ConfirmationPassword back = {handleStepsBack} forward ={handleStepsForward}/>}
  
      
    </>
  );
}