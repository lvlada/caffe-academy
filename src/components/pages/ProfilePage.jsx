import { Link } from "react-router-dom";
import backButton from "../../assets/back_dugme.png";
import { useNavigate } from 'react-router-dom';
import { ProfilLoayality } from '../UI/ProfilLoyality';
import { useAuth } from "../AuthContext";
import { signOutUser } from "../../services/firebaseService";
import { useEffect } from "react";


export function ProfilePage() {
    const navigate = useNavigate();
    const {user, userLogin} = useAuth();

    useEffect(()=>{
      if(!user){
        navigate('/login');
      }
    },[user, navigate])
   
    function handleBack() {
      navigate('/');
    }
    function handleLogout() {
      userLogin(false);
      signOutUser();
    }

  return (
    <>
      <div className="status-page">

        <div className="profil-page-header">
          <div className="profil-page-header-left">
          <button className="back-button"><img src={backButton} alt="Back Button" onClick={handleBack}/></button>
          </div>
          <div className="profil-page-header-right">
            <Link to="/" onClick={handleLogout}>Log out</Link>
          </div>
        </div>

        <div className="login-form">
          <img   src={user?.image || "https://api.dicebear.com/9.x/adventurer/svg?seed=Mason"} className="userLogo" alt="User logo" />
          <h2>{user?.displayName || "Nema imena korisnika"}</h2>
           <p>{user?.email || "Nema email korisnika"}</p>

           <h3>Loyalty program</h3>
           <p>Pridružite se našem loyalty programu i uživajte u besplatnoj kafi! Svaka deseta kafa je na naš račun kao nagrada za vašu vernost.</p>
           <ProfilLoayality />

        </div>
      </div>
    </>
  );
}