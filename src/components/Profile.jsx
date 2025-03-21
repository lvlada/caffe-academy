import backButton from "../assets/back_dugme.png";
import { useNavigate } from 'react-router-dom';
import { ProfilLoayality } from './ProfilLoyality';




export function Profile({ user }) {
    const navigate = useNavigate();
  
    function handleBack() {
      navigate('/');
    }

  return (
    <>
      <div className="login-page">

        <div className="header-login-page">
          <button className="back-button"><img src={backButton} alt="Back Button" onClick={handleBack}/></button>
        </div>

        <div className="login-form">
          <img src={user?.image} className="userLogo" alt="User logo" />
          <h2>{user?.name || "Nema imena korisnika"}</h2>
           <p>{user?.email || "Nema email korisnika"}</p>

           <h3>Loyality program</h3>
           <p>Pridružite se našem loyalty programu i uživajte u besplatnoj kafi! Svaka deseta kafa je na naš račun kao nagrada za vašu vernost.</p>
           <ProfilLoayality />

        </div>
      </div>
    </>
  );
}