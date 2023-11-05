import React, { useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Image,
  Table,
  Accordion,
} from "react-bootstrap";
//import { Inventory } from "../model/Inventory";

function ViewItemDetails({
  isOpen,
  onClose,
  details,
  updateInventory,
  getItemHistory,
}) {
  //const { inventory, updateInventory } = Inventory();
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("btnradio1");
  const [addQuantity, setaddQuantity] = useState("");
  const [edate, setedate] = useState(" ");
  const [history, sethistory] = useState(getItemHistory());

  // const citem = inventory.find((item) => item.id === id);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal size="lg" show={isOpen} onHide={onClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6} className="text-center">
            <h3 className="mb-4 text-center">{details.name}</h3>
            <Image
              src={details.imgSrc}
              width="100"
              height="100"
              fluid
              alt="Tomato"
            />
            <p className="mt-4 mb-0">Quantity</p>
            <h5>{details.quantity}</h5>
            <p className="mt-4 mb-0">Purchase Quantity</p>
            <h5>{details.defquantity}</h5>

            <Row className="mt-4">
              <Col>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Item History</Accordion.Header>
                    <Accordion.Body>
                      <Table>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getItemHistory().map((trans) => (
                            <tr>
                              <td>{trans.date}</td>
                              <td>{trans.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <h5 className="mb-4"> Add to inventory</h5>
            </div>
            <Form>
              <div className="text-center">
                <div
                  className="btn-group mb-4"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    checked={selectedRadio === "btnradio1"}
                    onChange={handleRadioChange}
                    onClick={(e) => setaddQuantity(details.defquantity)}
                  />
                  <label
                    className="btn btn-outline-success"
                    htmlFor="btnradio1"
                  >
                    Default
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                    checked={selectedRadio === "btnradio2"}
                    onChange={handleRadioChange}
                    onClick={(e) => setaddQuantity("")}
                  />
                  <label
                    className="btn btn-outline-success"
                    htmlFor="btnradio2"
                  >
                    Custom
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="quantity" className="form-label">
                  Quantity
                </Form.Label>
                <Form.Control
                  type="number"
                  id="quantity"
                  value={addQuantity}
                  onChange={(e) => setaddQuantity(parseInt(e.target.value))}
                  placeholder="Enter quantity"
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="expiryDate" className="form-label">
                  Expiry Date
                </Form.Label>
                <Form.Control
                  type="date"
                  id="expiryDate"
                  value={edate}
                  onChange={(e) => {
                    setedate(e.target.value);
                  }}
                />
              </div>
              <div className="form-check mb-4">
                <Form.Check
                  type="checkbox"
                  checked={isChecked}
                  id="defaultPurchase"
                  label="This is my default purchase"
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className="text-center">
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setedate("");
                    setaddQuantity("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="outline-success"
                  onClick={(e) =>
                    updateInventory(addQuantity, edate, isChecked)
                  }
                >
                  Add
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewItemDetails;
