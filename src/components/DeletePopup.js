import React from "react";
import { Modal, Button } from "react-bootstrap";

function DeletePopup({ isOpen, onClose, handleDeleteItem }) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handleDeleteItem()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePopup;
