import React from "react";
import { Button, Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Grocerylist = ({ items }) => {
  return (
    <Container className="list-table">
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item as="button" action>
            <Container className="text-center">
              <Row>
                <Col>
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
