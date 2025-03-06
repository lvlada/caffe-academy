import { useState } from 'react';
import cafeLogo from "../assets/cafe_logo.png";
import { useNavigate } from 'react-router-dom';


export function HeaderMainPage({ isLogin, userLogin, user}) {
  const navigate = useNavigate();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  function handleLogin() {
    navigate('/login');
  }

  function handleLogout() {
    userLogin(false);
    setDropdownVisible(false);
  }

  function handleProfile() {
    navigate('/profile');
  }

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  return (
    <>
      <div className="navBarMainPage">
        <img src={cafeLogo} className="logo" alt="Cafe Logo" />
        {isLogin ? (
          <>
            <img
              src={user?.image}
              className="avatar"
              alt="User Avatar"
              onClick={toggleDropdown}
            />
            {dropdownVisible && (
              <div className="dropdownMenu">
                <ul>
                  <li onClick={handleProfile}><i className='fas fa-user' > </i>  Profil</li>
                  <li onClick={handleLogout}> <i className='fas fa-sign-out-alt'></i>  Odjavi se</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <button className="loginButton" onClick={handleLogin}>
            Prijavi se
          </button>
        )}
      </div>
    </>
  );
}