import { CoffeList } from "./CoffeList";
import { FooterMainPage } from "./FooterMainPage";
import { HeaderMainPage } from "./HeaderMainPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage({ setUser, isLogin, userLogin, user }) {
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
          setUser={setUser}
          isLogin={isLogin}
          userLogin={userLogin}
          user={user}
        />
        <CoffeList />
        <FooterMainPage />
      </div>
    </>
  );
}
