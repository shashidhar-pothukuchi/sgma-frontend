import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setuname }) => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState(""); // State to manage email error message
  const [passwordError, setPasswordError] = useState(""); // State to manage password error message
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const setUserState = (e) => {
    setuname(username);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    setUserNameError("");

    // Check if email and password fields are empty

    if (username === "") {
      setUserNameError("User Name is required.");
    }

    if (password === "") {
      setPasswordError("Password is required.");
    }
    // If there are errors, do not proceed with the login
    if (usernameError || passwordError) {
      return;
    }

    // Check your authentication logic here and display an error message for wrong credentials
    if (username && password) {
      navigate("/home"); // Navigate to the '/dashboard' route for successful login
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setUserNameError("");
    setConfirmPasswordError("");
    if (email === "") {
      setEmailError("Email is required.");
    }
    if (username === "") {
      setUserNameError("User Name is required.");
    }

    if (password === "") {
      setPasswordError("Password is required.");
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm Password is required.");
    }
    if (emailError || usernameError || passwordError || confirmPasswordError) {
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("password does not match with each other");
    }
    setRegistrationSuccess(true);
    navigate("/");
  };

  const inputStyle = { border: "1px solid red" };
  return (
    <Container style={{ marginTop: "40vh" }}>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Tab.Container defaultActiveKey="login">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="register">Register</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="login">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          placeholder="Enter Username"
                          value={username}
                          onChange={(e) => setUserName(e.target.value)}
                          required // Make the field mandatory
                          style={usernameError ? inputStyle : {}}
                        />
                        {usernameError && (
                          <p className="text-danger">{usernameError}</p>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mt-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required // Make the field mandatory
                          style={passwordError ? inputStyle : {}}
                        />
                        {passwordError && (
                          <p className="text-danger">{passwordError}</p>
                        )}
                      </Form.Group>

                      <Button
                        className="mt-3"
                        variant="primary"
                        onClick={(e) => setUserState(e)}
                        type="submit"
                      >
                        Login
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="register">
                    {registrationSuccess ? (
                      <Alert variant="success">Registration Successful!</Alert>
                    ) : (
                      <Form onSubmit={handleRegister}>
                        <Form.Group controlId="username">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            value={username}
                            placeholder="Enter Username"
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            style={usernameError ? inputStyle : {}}
                          />
                          {usernameError && (
                            <p className="text-danger">{usernameError}</p>
                          )}
                        </Form.Group>
                        <Form.Group controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={emailError ? inputStyle : {}}
                          />
                          {emailError && (
                            <p className="text-danger">{emailError}</p>
                          )}
                        </Form.Group>
                        <Form.Group controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={passwordError ? inputStyle : {}}
                          />
                          {passwordError && (
                            <p className="text-danger">{passwordError}</p>
                          )}
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={confirmPasswordError ? inputStyle : {}}
                          />
                          {confirmPasswordError && (
                            <p className="text-danger">
                              {confirmPasswordError}
                            </p>
                          )}
                        </Form.Group>
                        <Button
                          className="mt-3"
                          variant="primary"
                          type="submit"
                        >
                          Register
                        </Button>
                      </Form>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
