import { useState } from "react";
import cofeImage from "../assets/coffeImage.png";
import Collapse from "react-bootstrap/Collapse";
import { useAuth } from "./AuthContext";

export function CoffeItem({ coffe }) {
  const { handleOrder, orderId, setOrderId } = useAuth();

  const [open, setOpen] = useState(false);
  const [coffePrice, setCoffePrice] = useState(coffe?.priceS);
  const [selectedSize, setSelectedSize] = useState("S");
  const [typeOfCoffe, setTypeOfCoffe] = useState("");
  const [typeOfMilk, setTypeOfMilk] = useState("");
  const [coffeNumber, setCoffeNumber] = useState(1);
  const isMilk = coffe?.milkOption;

  function takeOrder() {
    const order = {
      orderId: orderId,
      name: coffe.name,
      price: coffePrice,
      size: selectedSize,
      coffeeType: typeOfCoffe,
      milk: typeOfMilk,
      quantity: coffeNumber,
    };
    handleOrder(order);
    setCoffePrice(coffe?.priceS);
    setSelectedSize("S");
    setTypeOfCoffe("");
    setTypeOfMilk("");
    setCoffeNumber(1);
    setOpen(false);
    setOrderId((old) => old + 1);
  }

  function handleSizeChange(size) {
    setSelectedSize(size);
    if (size === "S") {
      setCoffePrice(coffe.priceS);
    } else if (size === "M") {
      setCoffePrice(coffe.priceM);
    } else if (size === "L") {
      setCoffePrice(coffe.priceL);
    }
  }

  function handleTypeChangeCoffe(event) {
    setTypeOfCoffe(event.target.value);
  }
  function handleTypeChangeMilk(event) {
    setTypeOfMilk(event.target.value);
  }

  function decrementCoffeNumber() {
    setCoffeNumber((old) => (old > 1 ? old - 1 : old));
  }

  function incrementCoffeNumber() {
    setCoffeNumber((old) => old + 1);
  }

  return (
    <>
      <div className="coffe-item">
        <div className="coffe-item-top">
          <div className="coffe-item-left">
            <img
              src={cofeImage}
              alt="coffe-image"
              className={open ? null : "coffe-image"}
            />
          </div>
          <div className="coffe-item-right">
            <div className={`coffe-item-right-title ${!open ? "open" : ""}`}>
              <h6>
                <strong>{coffe?.name}</strong>
              </h6>
              {open ? (
                <>
                  <span>
                    <strong>{coffePrice} RSD</strong>
                  </span>
                </>
              ) : null}
            </div>
            <p className="caffe-description">{coffe?.description}</p>
            <div className="coffe-item-right-footer">
              {open ? (
                <>
                  <div className="coffe-item-right-footer-coffe-size">
                    <img
                      onClick={() => handleSizeChange("S")}
                      src="/S-size.png"
                      alt="Coffe size S"
                      className={selectedSize === "S" ? "selected" : ""}
                    />
                    <img
                      onClick={() => handleSizeChange("M")}
                      src="/M-size.png"
                      alt="Coffe size M"
                      className={selectedSize === "M" ? "selected" : ""}
                    />
                    <img
                      onClick={() => handleSizeChange("L")}
                      src="/L-size.png"
                      alt="Coffe size L"
                      className={selectedSize === "L" ? "selected" : ""}
                    />
                  </div>
                  <div>
                    <button
                      className="coffe-item-button"
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="coffe-item-right-footer-price">
                    <p>
                      Cena:
                      <br />
                      <span>
                        <strong>{coffePrice} RSD</strong>
                      </span>
                    </p>
                  </div>
                  <button
                    className="coffe-item-button"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="coffe-item-bottom">
          <Collapse in={open}>
            <div id="example-collapse-text">
              <div className="coffe-item-dropdowns">
                <div className="dropdown-left">
                  <fieldset>
                    <legend>Zrno</legend>
                    <select
                      id="dropdown-left"
                      className="dropdown"
                      required
                      onChange={handleTypeChangeCoffe}
                      value={typeOfCoffe}
                    >
                      <option value="" hidden className="option-placeholder">
                        Odaberi zrno
                      </option>
                      <option value="Brazil">Brazil</option>
                      <option value="Kuba">Kuba</option>
                      <option value="Etiopija">Etiopija</option>
                    </select>
                  </fieldset>
                </div>
                <div className="dropdown-right">
                  <fieldset>
                    <legend>Mleko</legend>
                    <select
                      id="dropdown-right"
                      className="dropdown"
                      required
                      disabled={!isMilk}
                      onChange={handleTypeChangeMilk}
                      value={typeOfCoffe}
                    >
                      <option value="" selected hidden>
                        Odaberi mleko
                      </option>
                      <option value="Obicno mleko">Obicno mleko</option>
                      <option value="Bademovo mleko">Bademovo mleko</option>
                      <option value="Sojino mleko">Sojino mleko</option>
                    </select>
                  </fieldset>
                </div>
              </div>
              <hr />
              <div className="coffe-item-footer">
                <div className="coffe-item-footer-left">
                  <button
                    className="coffe-item-button"
                    onClick={decrementCoffeNumber}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="caffe-item-coffe-number">{coffeNumber}</span>
                  <button
                    className="coffe-item-button"
                    onClick={incrementCoffeNumber}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="coffe-item-footer-right">
                  <button className="coffe-item-basket" onClick={takeOrder}>
                    <i className="fas fa-shopping-cart"></i>Dodaj u korpu
                  </button>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}
