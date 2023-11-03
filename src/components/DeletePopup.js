import React from 'react';

function DeletePopup({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden={!isOpen}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">Delete Item</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this item?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
