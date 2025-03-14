import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

export function FooterMainPage() {
  const [open, setOpen] = useState(false);

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
            <button>&rarr; Naruči</button>
          </div>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <hr />
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    </>
  );
}
