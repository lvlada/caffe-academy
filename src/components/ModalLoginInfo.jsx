import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export function ModalLoginInfo({ modalInfo, isModal, modalMessage }) {

  function handleClose() {
    modalInfo(false); 
  }

  return (
    <>
      <Modal
        show={isModal}
        onHide={handleClose}
        className="modal-confirmation"
        dialogClassName="modal-dialog-centered"
      >
        <Modal.Body className="modal-confirmation-body">
          {modalMessage}
        </Modal.Body>
        <div className="modal-items">
          <Button
            variant="primary"
            onClick={handleClose}
            className="modal-button-right"
          >
            OK
          </Button>
        </div>
      </Modal>
    </>
  );
}
