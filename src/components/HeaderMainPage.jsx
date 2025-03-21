import { useState, useEffect, useRef } from 'react';
import cafeLogo from "../assets/cafe_logo.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


export function HeaderMainPage() {
  const navigate = useNavigate();
  const {isLogin, user, handleLogin} = useAuth()

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  function handleLoginPage() {
    navigate('/login');
  }

  function handleLogout() {
    handleLogin(false);
    setDropdownVisible(false);
  }

  function handleProfile() {
    navigate('/profile');
  }

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef])

  return (
    <>
      <div className="navBarMainPage">
        <div className='navBarMainPage-left'>
           <img src={cafeLogo} className="logo" alt="Cafe Logo" />
        </div>
        <div className='navBarMainPage-right'> 
        {isLogin ? (
          <>
            <img
              src={user?.image}
              className="avatar"
              alt="User Avatar"
              onClick={toggleDropdown}
            />
            {dropdownVisible && (
              <div className="dropdownMenu" ref={dropdownRef}>
                <ul>
                  <li onClick={handleProfile}><i className='fas fa-user' > </i>  Profil</li>
                  <li onClick={handleLogout}> <i className='fas fa-sign-out-alt'></i>  Odjavi se</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <button className="loginButton" onClick={handleLoginPage}>
            Prijavi se
          </button>
        )}
        </div>

      </div>
    </>
  );
}