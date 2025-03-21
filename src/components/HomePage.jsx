import { useAuth } from "./AuthContext";
import { CoffeList } from "./CoffeList";
import { FooterMainPage } from "./FooterMainPage";
import { HeaderMainPage } from "./HeaderMainPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const {user} = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email === "admin@gmail.com") {
      navigate("/admin");
    }
  }, [user, navigate]);
  
  return (
    <>
      <div className="home-page">
        <HeaderMainPage
          // isLogin={isLogin}
          // userLogin={userLogin}
          // user={user}
        />
        <CoffeList />
        <FooterMainPage />
      </div>
    </>
  );
}
