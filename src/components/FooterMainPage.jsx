import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function FooterMainPage() {
  const navigate = useNavigate()
  const {setCart, totalPrice, setOrderId, handleAllCarts} = useAuth();
  const [open, setOpen] = useState(false);

  function handleOrder(){
    navigate("/status-page");
    handleAllCarts();
    setOrderId(new Date());
    setCart([]);
  }

  return (
    <>
      <div
        className="footer-main"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <hr className="footer-button" />
        <div className="footer-info">
          <div className="footer-price">
            <p>
              <span>Ukupno: </span>
              <br />
              <span>{totalPrice} RSD</span>
            </p>
          </div>
          <div className="footer-order-button">
            <button onClick={handleOrder}>&rarr; Naruči</button>
          </div>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <hr className="footer-main-cart-line"/>
            <CartItem />
          </div>
        </Collapse>
      </div>
    </>
  );
}
