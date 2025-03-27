import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useAuth } from "./AuthContext";

export function ModalDeleteConfirmation({order}) {
  const { handleDelete } = useAuth();

  const [show, setShow] = useState(false);

  function handleClose () {
    setShow(false);
  }
  function handleShow () {
    setShow(true);
  }

  function handleConfirmDelete() {
    handleDelete(order.orderId);
    setShow(false);
  }
  return (
    <>
      <p className="cart-item-list-remove" onClick={handleShow}>
        <strong>x</strong>
      </p>

      <Modal show={show} onHide={handleClose} className="modal-confirmation"  dialogClassName="modal-dialog-centered">
        <Modal.Body className="modal-confirmation-body">
          Da li ste sigurni da želite da promenite status porudzbine ?
        </Modal.Body>
        <div className="modal-items">
          <Button variant="secondary" onClick={handleClose} className="modal-button-left">
            NE
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete} className="modal-button-right">
            DA
          </Button>
        </div>
      </Modal>
    </>
  );
}
