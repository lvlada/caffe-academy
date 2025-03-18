import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export function FooterMainPage() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  function handleOrder(){
    navigate("/status-page");
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
              <span>920,00 RSD</span>
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
