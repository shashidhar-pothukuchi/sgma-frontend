import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import "../index.css";

const Navbar = ({ username, isSet, setLogout }) => {
  const handleLogout = () => {
    // Implement your logout logic here
    setLogout();
  };

  return (
    <div className="container-fluid mb-5">
      <BSNavbar
        expand="md"
        fixed="top"
        className="py-0 container-fluid rounded-bottom"
        id="head-nv"
      >
        <Container fluid className="pt-2 px-2 my-0">
          <Link
            to="/home"
            style={{ textDecoration: "none" }}
            className="mx-auto"
          >
            <div className="navbar-brand text-light h1 title">SGMA</div>
          </Link>
          {isSet && username.trim().length > 0 && (
            <Nav className="ml-auto">
              <Nav.Item className="text-light align-self-center px-3">
                <h5>{username}</h5>
              </Nav.Item>
              <Nav.Link onClick={(e) => handleLogout()}>
                <Link
                  to="/"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </BSNavbar>
    </div>
  );
};

export default Navbar;
