import { useState } from "react";
import cofeImage from "../assets/coffeImage.png";
import Collapse from "react-bootstrap/Collapse";

export function CoffeItem({coffe}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="coffe-item">
        <div className="coffe-item-top">
          <div className="coffe-item-left">
            <img src={cofeImage} alt="coffe-image" className="coffe-image" />
          </div>
          <div className="coffe-item-right">
            <h6>
              <strong>{coffe?.name}</strong>
            </h6>
            <p className="caffe-description">{coffe?.description}</p>
            <div className="coffe-item-right-footer">
              <div className="coffe-item-right-footer-price">
                <p>
                  Cena:
                  <br />
                  <span><strong>{coffe?.price} RSD</strong></span>
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
                  <select id="dropdown-left" className="dropdown">
                    <option value="" selected className="option-placeholder">
                      Odaberi zrno
                    </option>
                    <option value="option1">Brazil</option>
                    <option value="option2">Kuba</option>
                    <option value="option2">Etiopija</option>
                  </select>
                  </fieldset>

                </div>
                <div className="dropdown-right">
                  <fieldset>
                  <legend>Mleko</legend>
                  <select id="dropdown-right" className="dropdown">
                    <option value="" selected className="option-placeholder">
                      Odaberi mleko
                    </option>
                    <option value="option1">Obicno mleko</option>
                    <option value="option2">Bademovo mleko</option>
                    <option value="option2">Sojino mleko</option>
                  </select>
                  </fieldset>
                </div>
              </div>
              <hr />
              <div className="coffe-item-footer">
                <div className="coffe-item-footer-left">
                  <button className="coffe-item-button">
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="caffe-item-coffe-number">1</span>
                  <button className="coffe-item-button">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="coffe-item-footer-right">
                  <button className="coffe-item-basket">
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
