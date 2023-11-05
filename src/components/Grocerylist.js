import React, { useState } from "react";
import { Button, Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

const Grocerylist = ({ items }) => {
  const [clickedItems, setClickedItems] = useState([]);

  const handleItemClick = (itemId) => {
    if (!clickedItems.includes(itemId)) {
      setClickedItems([...clickedItems, itemId]);
    } else {
      const updatedItems = clickedItems.filter((id) => id !== itemId);
      setClickedItems(updatedItems);
    }
  };

  return (
    <Container className="list-table">
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item
            key={item.id}
            as="button"
            action
            onClick={() => handleItemClick(item.id)}
            style={
              clickedItems.includes(item.id)
                ? { color: "gray", textDecoration: "line-through" }
                : {}
            }
          >
            <Container className="text-center">
              <Row>
                <Col>
                  {clickedItems.includes(item.id) && (
                    <i
                      className="fa fa-check"
                      style={{ marginRight: "10px" }}
                    ></i>
                  )}
                  <Image src={item.imgSrc} height="50" width="50" fluid />
                </Col>
                <Col>Quantity to Buy</Col>
                <Col>Inventory Quantity</Col>
                <Col>Expiry Date</Col>
              </Row>
              <Row>
                <Col>{item.name}</Col>
                <Col>
                  <h5>
                    {item.expiryDate && new Date(item.expiryDate) < new Date()
                      ? item.quantity
                      : item.defquantity - item.quantity > 0
                      ? item.defquantity - item.quantity
                      : 0}
                  </h5>
                </Col>
                <Col>
                  <h5>{item.quantity}</h5>
                </Col>
                <Col>
                  <h5
                    className={
                      item.expired === false ? "text-success" : "text-danger"
                    }
                  >
                    {item.expiryDate}
                  </h5>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Grocerylist;
