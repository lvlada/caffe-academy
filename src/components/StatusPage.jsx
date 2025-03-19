import { useState, useEffect } from "react";
import backButton from "../assets/back_dugme.png";
import { useNavigate } from "react-router-dom";
import orderPlaced from "../assets/OrderPlaced.gif";
import Vector from "../assets/Vector.png";
import CoffeStatus from "../assets/CoffeStatus.png";
import CoffeStatusMidd from "../assets/CoffeStatusMidd.png"
import CoffeStatusFinal from "../assets/CoffeStatusFinal.png"
import HalfwayStatus from "../assets/HalfwayStatus.gif";
import ReadyStatus from "../assets/ReadyStatus.gif";

export function StatusPage() {
  const navigate = useNavigate();
  const [time, setTime] = useState(30); // 15 minuta u sekundama - 900
  const [statusMessage, setStatusMessage] = useState("Porudzbina primljena");
  const [statusImage, setStatusImage] = useState(orderPlaced);
  const [progressImage, setProgressImage] = useState(CoffeStatus);
  const [currentStep, setCurrentStep] = useState(0); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setStatusMessage("Kafa je spremna!");
          setStatusImage(ReadyStatus);
          setProgressImage(CoffeStatusFinal);
          setCurrentStep(2);
          return 0;
        } else if (prevTime === time/2) { 
          setStatusMessage("Kafa se priprema!");
          setStatusImage(HalfwayStatus);
          setProgressImage(CoffeStatusMidd);
          setCurrentStep(1);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function handleBack() {
    navigate("/");
  }

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

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
            ID porudžbine:{" "}
            <span>
              <strong>125479</strong>
            </span>
          </p>
        </div>
        <div className="status-page-time">
          <img src={Vector} alt="Image of the clock" />
          <span>{formatTime(time)}</span>
          <div className="status-page-track">
            <img src={progressImage} alt="Status" />
            <div className="status-page-track-info">
              <p className={currentStep >= 0 ? "status-page-track-info-base" : "status-page-track-info-wait"}>Porudzbina primljena</p>
              <p className={currentStep >= 1 ? "status-page-track-info-base" : "status-page-track-info-wait"}>Kafa se priprema</p>
              <p className={currentStep >= 2 ? "status-page-track-info-base" : "status-page-track-info-wait"}>Kafa je spremna</p>
            </div>
          </div>
        </div>
        <div className="status-page-info">
          <img src={statusImage} alt="Status" />
          <p>{statusMessage}</p>
        </div>
      </div>
    </>
  );
}