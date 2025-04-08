import { useAuth } from "./AuthContext";
import { CoffeList } from "./CoffeList";
import { FooterHomePage } from "./FooterHomePage";
import { HeaderHomePage } from "./HeaderHomePage";
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
        <HeaderHomePage/>
        <CoffeList />
        <FooterHomePage />
      </div>
    </>
  );
}
