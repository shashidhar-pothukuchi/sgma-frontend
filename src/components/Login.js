// import React, { useState } from 'react';
// import { Button, Container, Form, Row, Col} from 'react-bootstrap';
// import {useNavigate} from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError('');
//     setPasswordError('');

//     if (email === '') {
//       setEmailError('Email is required...');
//       return;
//     }
//     if(password === ''){
//       setPasswordError('Password is required...');
//     }
//     if (emailError || passwordError) {
//       return;
//     }
//     console.log('Email:', email);
//     console.log('Password:', password);
//     if(email !== 'johndoe@example.com' && password !== 'johndoe'){
       
//        setEmailError('Email is incorrect.');
//        setPasswordError('Password is incorrect');
//     }
//     else if(email !== 'johndoe@example.com')
//     {
//       setEmailError('Email is incorrect.');
      
//     }
//     else if(password !== 'johndoe'){
//       setPasswordError('Password is incorrect');
//     }
//     else
//     {
//       navigate('/home');
//     }
//   };
//   const inputStyle = { border: '1px solid red' };
//   return (
//     <Container >
//       <Row className="justify-content-center align-items-center min-vh-100">
//         <Col md={6}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 style = {emailError ? inputStyle:{}}
//               />
//               {emailError && <p className="text-danger">{emailError}</p>}
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 style = {passwordError?inputStyle:{}}
//               />
//               {passwordError && <p className="text-danger">{passwordError}</p>}
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </Form>
//           </Col>
//           </Row>
//     </Container>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState(''); // State to manage email error message
//   const [passwordError, setPasswordError] = useState(''); // State to manage password error message

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setEmailError('');
//     setPasswordError('');

//     // Check if email and password fields are empty
//     if (email === '') {
//       setEmailError('Email is required.');
//     }

//     if (password === '') {
//       setPasswordError('Password is required.');
//     }

//     // If there are errors, do not proceed with the login
//     if (emailError || passwordError) {
//       return;
//     }

//     // You can add your login logic here, e.g., make an API request to authenticate the user.
//     // For this example, we'll simply log the email and password.

//     // Simulate a successful login, and navigate to a new route
//     console.log('Email: ' + email);
//     console.log('Password: ' + password);

//     // Check your authentication logic here and display an error message for wrong credentials
//     if (email === 'user@example.com' && password === 'password') {
//       navigate('/dashboard'); // Navigate to the '/dashboard' route for successful login
//     } else {
//       setEmailError('Email is incorrect.');
//       setPasswordError('Password is incorrect.');
//     }
//   };

//   const inputStyle = { border: '1px solid red' };

//   return (
//     <Container>
//       <Row className="justify-content-center align-items-center min-vh-100">
//         <Col md={6}>
//           <Tab.Container defaultActiveKey="login">
//             <Row>
//               <Col sm={3}>
//                 <Nav variant="pills" className="flex-column">
//                   <Nav.Item>
//                     <Nav.Link eventKey="login">Login</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="register">Register</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </Col>
//               <Col sm={9}>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="login">
//                     <Form onSubmit={handleSubmit}>
//                       <Form.Group controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                           type="email"
//                           placeholder="Enter email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           required // Make the field mandatory
//                           style={emailError ? inputStyle : {}}
//                         />
//                         {emailError && <p className="text-danger">{emailError}</p>}
//                       </Form.Group>

//                       <Form.Group controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                           type="password"
//                           placeholder="Password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           required // Make the field mandatory
//                           style={passwordError ? inputStyle : {}}
//                         />
//                         {passwordError && <p className="text-danger">{passwordError}</p>}
//                       </Form.Group>

//                       <Button variant="primary" type="submit">
//                         Login
//                       </Button>
//                     </Form>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="register">
//                     {/* Add your registration form here */}
//                     <p>Registration Form Placeholder</p>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Col>
//             </Row>
//           </Tab.Container>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(''); // State to manage email error message
  const [passwordError, setPasswordError] = useState(''); // State to manage password error message

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Check if email and password fields are empty
    if (email === '') {
      setEmailError('Email is required.');
    }

    if (password === '') {
      setPasswordError('Password is required.');
    }

    // If there are errors, do not proceed with the login
    if (emailError || passwordError) {
      return;
    }

    // You can add your login logic here, e.g., make an API request to authenticate the user.
    // For this example, we'll simply log the email and password.

    // Simulate a successful login, and navigate to a new route
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    // Check your authentication logic here and display an error message for wrong credentials
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard'); // Navigate to the '/dashboard' route for successful login
    } else {
      setEmailError('Email is incorrect.');
      setPasswordError('Password is incorrect.');
    }
  };

  const inputStyle = { border: '1px solid red' };

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required // Make the field mandatory
                          style={emailError ? inputStyle : {}}
                        />
                        {emailError && <p className="text-danger">{emailError}</p>}
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required // Make the field mandatory
                          style={passwordError ? inputStyle : {}}
                        />
                        {passwordError && <p className="text-danger">{passwordError}</p>}
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="register">
                    {/* Add your registration form here */}
                    <p>Registration Form Placeholder</p>
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
