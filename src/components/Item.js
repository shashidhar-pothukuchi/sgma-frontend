import React, { useState } from "react";
import ViewItemDetails from "./ViewItemDetails";
import DeletePopup from "./DeletePopup";
import { Image } from "react-bootstrap";
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
  transactions,
  recordTransaction,
  recentTransactions,
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

  const getItemHistory = () => {
    return recentTransactions(details.id);
  };

  const updateDeleted = async (newValue) => {
    const oldValue = details.quantity;
    await updateInventory(details.id, details.quantity - newValue);
    recordTransaction({
      itemid: details.id,
      quantity: oldValue,
      updatedQuantity: oldValue - newValue,
      date: "11-05-2023",
      type: "Quantity",
      description: "Deleted " + newValue,
    });
  };
  const updateNewAdded = async (newValue, edate, isDefault) => {
    if (isDefault) {
      const oldValue = details.defquantity;
      await updatedefInventory(details.id, newValue);
      recordTransaction({
        itemid: details.id,
        quantity: oldValue,
        updatedQuantity: newValue,
        date: "11-05-2023",
        type: "Default Quantity",
        description: "Updated Default Quantity: " + newValue,
      });
    } else {
      if (edate != null) {
        await updateExpiryDate(details.id, edate);
      }
      const oldValue = details.quantity;
      await updateInventory(details.id, details.quantity + newValue);
      recordTransaction({
        itemid: details.id,
        quantity: oldValue,
        updatedQuantity: oldValue + newValue,
        date: "11-05-2023",
        type: "Quantity",
        description: "Added " + newValue,
      });
    }
  };

  const deleteitemcard = () => {
    deleteItem(details.id);
    handleDeletePopupClose();
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card rounded border-0 shadow-sm">
        <div
          className={
            details.expired === false ? "bg-success-subtle" : "bg-danger-subtle"
          }
        >
          <div className="row g-0">
            <div className="col-md-4 text-center">
              <Image
                src={details.imgSrc}
                rounded
                className="p-2"
                height={150}
                width={150}
                alt={details.name}
              />
              <p className="pt-2">
                {details.quantity > 0 &&
                  (details.expired === false
                    ? "Expires in " + details.expireIn + " days"
                    : "Expired")}
              </p>
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
                      onClick={() => updateDeleted(1)}
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
                      onClick={() => updateNewAdded(1, null, false)}
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
                      getItemHistory={getItemHistory}
                    />
                  )}
                  {/* </Modal> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
