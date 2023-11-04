import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import '../index.css'


const Navbar = () => {
  return (
    <div className="container-fluid mb-5">
      <nav className="navbar navbar-expand-md fixed-top py-0 container-fluid rounded-bottom">
        <Container fluid className=" pt-2 px-2 my-0 justify-content-center" id="head-nv">
          <Link to="/" style={{textDecoration: 'none'}}>
            <div className="navbar-brand text-light h1 title">
              SGMA
            </div>
            </Link>
        </Container>
      </nav>
    </div>
  )
}

export default Navbar