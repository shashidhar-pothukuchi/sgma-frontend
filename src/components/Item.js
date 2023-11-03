
import React, { useState } from 'react';
import ViewItemDetails from './ViewItemDetails';
import DeletePopup from './DeletePopup';
import 'font-awesome/css/font-awesome.min.css';

function Item() {
  const [isDetailsPopupOpen, setDetailsPopupOpen] = useState(true);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(true);

  const handleDetailsClick = () => {
    setDetailsPopupOpen(true);
  };

  const handleDeleteClick = () => {
    setDeletePopupOpen(true);
  };

  const handleDetailsPopupClose = () => {
    setDetailsPopupOpen(true);
  };

  const handleDeletePopupClose = () => {
    setDeletePopupOpen(true);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card rounded border-0 bg-success-subtle shadow-sm">
        <div className="row g-0">
          <div className="col-md-4 text-center">
          <img src={require('../images/toamto.jpg')} className="img-fluid rounded p-2" alt="Tomato"/>
          <p className="pt-2">Expires in 7 days</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title d-flex justify-content-between align-items-center">
                <span className="mx-auto">Tomato</span>
                <button
                  type="button"
                  className="btn btn-outline-danger border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  onClick={handleDeleteClick}
                >
                  <i className="fa fa-trash"></i>
                </button>
                {isDeletePopupOpen && (
                    <DeletePopup
                      isOpen={isDeletePopupOpen}
                      
                      onClose={handleDeletePopupClose}
                    />
                  )}
              </h3>
              <div className="text-center py-1">
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-secondary rounded border-0">
                    <i className="fa fa-minus"></i>
                  </button>
                  <h1 className="card-text px-4 quantity"> 10 </h1>
                  <button type="button" className="btn btn-outline-secondary rounded border-0">
                    <i className="fa fa-add"></i>
                  </button>
                </div>
              </div>
              <div className="container text-center py-1 mb-py-0">
                <button
                  type="button"
                  className="btn btn-success details-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#detailsModal"
                  onClick={handleDetailsClick}>
                  View Details
                </button>
                {isDetailsPopupOpen && (
                  <ViewItemDetails
                    isOpen={isDetailsPopupOpen}
                    onClose={handleDetailsPopupClose}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
