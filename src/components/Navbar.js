import React from 'react'
import '../index.css'

const Navbar = () => {
let url = "#"
  return (
    <div className="container-fluid mb-5">
      <nav className="navbar navbar-expand-md fixed-top py-0 container-fluid rounded-bottom">
        <div className="container-fluid pt-2 px-2 justify-content-center" id="head-nv">
          <p id="title">
            <a href={url} className="navbar-brand text-light h1 title">
              SGMA
            </a>
          </p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar