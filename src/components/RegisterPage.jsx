import cafeLogo from "../assets/cafe_logo.png";
import backButton from "../assets/back_dugme.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "../assets/Alert.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import users from "../data/users.json";
import { use } from "react";


const message = "Neispravan unos emaila";
const message2 = "Vec postoji nalog sa ovom email adresom";

export function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [errorMessageName, setErrorMessageName] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState(false);
  const [errorMessageInfo, setEerrorMessageInfo]= useState(message);
  const [errorMessagePassword, setErrorMessagePassword] = useState(false);
  const [
    errorMessagePasswordConfirmation,
    setErrorMessagePasswordConfirmation,
  ] = useState(false);

  function handleBack() {
    navigate("/login");
  }

  function handleConfirmation() {
    let isValid = true;

    if (name.trim().length < 2 || name.trim().length > 50) {
      setErrorMessageName(true);
      isValid = false;
    } else {
      setErrorMessageName(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const userCheck = users.find((user) => user.email === email);
    if (!emailRegex.test(email) || !email.endsWith(".com")) {
      setErrorMessageEmail(true);
      isValid = false;
    } else if (userCheck) {
        setErrorMessageEmail(true);
        setEerrorMessageInfo(message2)
     } else{
      setErrorMessageEmail(false);
     }
    

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessagePassword(true);
      isValid = false;
    } else {
      setErrorMessagePassword(false);
    }

    if (password !== passwordConfirmation) {
      setErrorMessagePasswordConfirmation(true);
      isValid = false;
    } else {
      setErrorMessagePasswordConfirmation(false);
    }

    if (isValid) {
      navigate("/confirmation-page");
    }
  }

  const renderTooltip = (message) => (
    <Tooltip
      id="tooltip"
      style={{ backgroundColor: "#E8E8E8", color: "black" }}
    >
      {message}
    </Tooltip>
  );

  return (
    <div className="register-page">
      <div className="header-register-page">
        <button className="back-button">
          <img src={backButton} alt="Back Button" onClick={handleBack} />
        </button>
      </div>

      <div className="register-form">
        <img src={cafeLogo} className="LoginLogo" alt="Cafe Logo" />
        <h2>Registruj se</h2>

        <div className="input-field">
          <div className="input-field-box">
            <h2>Ime i prezime</h2>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("Ime mora biti između 2 i 50 karaktera")}
            >
              <input
                type="text"
                placeholder="Unesite ime i prezime"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </OverlayTrigger>
            {errorMessageName ? (
              <div className="login-form-alert-message">
                <p>
                  <img src={Alert} alt="" /> Ime ne ispunjava kriterijume
                </p>
              </div>
            ) : null}
          </div>

          <div className="input-field-box">
            <h2>Email</h2>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip(
                "Email mora sadržati @ i završavati se sa .com"
              )}
            >
              <input
                type="text"
                placeholder="Unesite email adresu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </OverlayTrigger>
            {errorMessageEmail ? (
              <div className="login-form-alert-message">
                <p>
                  <img src={Alert} alt="" /> {errorMessageInfo}
                </p>
              </div>
            ) : null}
          </div>

          <div className="input-field-box">
            <h2>Lozinka</h2>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip(
                "Lozinka mora imati najmanje 8 karaktera, jedno veliko slovo, jedno malo slovo i jedan broj"
              )}
            >
              <input
                type="password"
                placeholder="Unesite lozinku"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </OverlayTrigger>
            {errorMessagePassword ? (
              <div className="login-form-alert-message">
                <p>
                  <img src={Alert} alt="" /> Lozinka je prekratka. Pokušajte
                  ponovo
                </p>
              </div>
            ) : null}
          </div>

          <div className="input-field-box">
            <h2>Potvrdite lozinku</h2>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip(
                "Lozinke se ne podudaraju. Pokušajte ponovo"
              )}
            >
              <input
                type="password"
                placeholder="Potvrdite lozinku"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </OverlayTrigger>
            {errorMessagePasswordConfirmation ? (
              <div className="login-form-alert-message">
                <p>
                  <img src={Alert} alt="" /> Lozinke se ne podudaraju. Pokušajte
                  ponovo
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <button className="registerButton" onClick={handleConfirmation}>
          Registruj se
        </button>

        <div className="login-link">
          <p>Već imate kreiran nalog?</p>
          <p>
            <a href="/login">Prijavi se</a>
          </p>
        </div>
      </div>
    </div>
  );
}
