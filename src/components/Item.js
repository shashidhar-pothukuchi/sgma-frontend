import React, { useState } from "react";
import ViewItemDetails from "./ViewItemDetails";
import DeletePopup from "./DeletePopup";
import "font-awesome/css/font-awesome.min.css";
// import { Inventory } from "../model/Inventory";
// import { Link } from "react-router-dom";
// import { Modal } from "react-bootstrap";

function Item({
  details,
  updateInventory,
  updatedefInventory,
  updateExpiryDate,
  deleteItem,
}) {
  //const { inventory, updateInventory } = Inventory();
  const [isDetailsPopupOpen, setDetailsPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  //   const item = inventory.find((item) => item.id === details.id);
  //const [item, setitem] = useState(inventory.find(item => item.id === details.id));
  const handleDetailsClick = () => {
    setDetailsPopupOpen(true);
  };

  const handleDeleteClick = () => {
    setDeletePopupOpen(true);
  };

  const handleDetailsPopupClose = () => {
    setDetailsPopupOpen(false);
  };

  const handleDeletePopupClose = () => {
    setDeletePopupOpen(false);
  };

  const updateNewAdded = (newValue, edate, isDefault) => {
    if (isDefault) {
      updatedefInventory(details.id, newValue);
    } else {
      if (edate != null) {
        updateExpiryDate(details.id, edate);
      }
      updateInventory(details.id, details.quantity + newValue);
    }
  };

  const deleteitemcard = () => {
    deleteItem(details.id);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card rounded border-0 bg-success-subtle shadow-sm">
        <div className="row g-0">
          <div className="col-md-4 text-center">
            <img
              src={details.imgSrc}
              className="img-fluid rounded p-2"
              height="100"
              width="100"
              alt="Tomato"
            />
            <p className="pt-2">Expires in 7 days</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title d-flex justify-content-between align-items-center">
                <span className="mx-auto">{details.name}</span>
                <button
                  type="button"
                  className="btn btn-outline-danger border-0"
                  onClick={handleDeleteClick}
                >
                  <i className="fa fa-trash"></i>
                </button>
                {isDeletePopupOpen && (
                  <DeletePopup
                    isOpen={isDeletePopupOpen}
                    onClose={handleDeletePopupClose}
                    handleDeleteItem={deleteitemcard}
                  />
                )}
              </h3>
              <div className="text-center py-1">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded border-0"
                    onClick={() =>
                      updateInventory(details.id, details.quantity - 1)
                    }
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <h1 className="card-text px-4 quantity">
                    {" "}
                    {details.quantity}{" "}
                  </h1>
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded border-0"
                    onClick={() =>
                      updateInventory(details.id, details.quantity + 1)
                    }
                  >
                    <i className="fa fa-add"></i>
                  </button>
                </div>
              </div>
              <div className="container text-center py-1 mb-py-0">
                {/* <Link to='/viewdetails'> */}
                <button
                  type="button"
                  className="btn btn-success details-btn"
                  //   data-bs-toggle="modal"
                  //   data-bs-target="#detailsModal"
                  onClick={handleDetailsClick}
                >
                  View Details
                </button>
                {/* </Link> */}
                {/* <Modal show={isDetailsPopupOpen} onHide={handleDeletePopupClose} backdrop="static"> */}
                {isDetailsPopupOpen && (
                  <ViewItemDetails
                    isOpen={isDetailsPopupOpen}
                    onClose={handleDetailsPopupClose}
                    details={details}
                    updateInventory={updateNewAdded}
                  />
                )}
                {/* </Modal> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
