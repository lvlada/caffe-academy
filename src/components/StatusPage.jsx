import backButton from "../assets/back_dugme.png";
import { useNavigate } from "react-router-dom";
import orderPlaced from "../assets/orderPlaced.png";
import Vector from "../assets/Vector.png";
import CoffeStatus from "../assets/CoffeStatus.png";

export function StatusPage() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <>
      <div className="status-page">
        <div className="status-page-header">
          <button className="back-button">
            <img src={backButton} alt="Back Button" onClick={handleBack} />
          </button>
        </div>
        <div className="status-page-id">
          <p>
            ID porudjzbine:{" "}
            <span>
              <strong>125479</strong>
            </span>
          </p>
        </div>
        <div className="status-page-time">
          <img src={Vector} alt="Image of the clock" />
          <span>00 : 15 : 05</span>
          <div className="status-page-track">
            <img src={CoffeStatus} alt="Coffe status" />
            <div className="status-page-track-info">
              <p>Porudzbina primljena</p>
              <p>Kafa se priprema</p>
              <p>Kafa je spremna</p>
            </div>
          </div>
        </div>
        <div className="status-page-info">
          <img src={orderPlaced} alt="Image if mobile phone" />
          <p>Porudzbina je primljena</p>
        </div>
      </div>
    </>
  );
}
