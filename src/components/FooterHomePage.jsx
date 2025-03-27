import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { CartItemList } from "./CartItemList";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ModalLoginInfo } from "./ModalLoginInfo";

const message = "Morate se prvo logovati da bi naručili kafu!"

export function FooterHomePage() {
  const navigate = useNavigate()
  const {cart, setCart, totalPrice, setOrderId, handleAllCarts, user} = useAuth();
  const [open, setOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(message);

  function handleOrder(){
    if(user){
      if( cart.length > 0){
        navigate("/status-page");
        handleAllCarts();
        setOrderId(new Date());
        setCart([]);
        setIsModal(false);
      } else{
        setModalMessage("Niste nista narucili!");
        setIsModal(true);
      }
    } else{
      setIsModal(true);
      setModalMessage(message);
    }
  }

  function handleModal(modal){
    setIsModal(modal);
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
            <CartItemList />
          </div>
        </Collapse>

        {isModal &&  <ModalLoginInfo modalInfo = {handleModal} isModal = {isModal} modalMessage = {modalMessage}/> }
      
      </div>
    </>
  );
}
