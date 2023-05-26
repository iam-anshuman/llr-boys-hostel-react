import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container container-nav">
        <Link to="/" className="navbar-brand">
        <strong className="h3">LLR</strong> Boys' Hostel</Link>
        
    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <Link to="/" className="nav-link">Hostel</Link>
        </li>
        <li className="nav-item">
            <Link to="/Mess" className="nav-link">Mess</Link>
        </li>
        <li className="nav-item">
            <Link to="/Contact" className="nav-link">Contact Us</Link>
        </li>
          <li className="nav-item">
              <Link to="/Gallery" className="nav-link">Gallery</Link>
          </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">Login</Link>
        </li>


    </ul>
</div>
  </div>
  <input className={"checkBox"} type="checkbox" id="active" />
  <label htmlFor="active" className="menu-btn"><span></span></label>
  <label htmlFor="active" className="close"></label>
  <div className="wrapper">
      <ul>
          <li><Link to="/">Home</Link></li>
          
<li><Link to="/Gallery">Gallery</Link></li>
<li><Link to="/Mess">Mess</Link></li>
<li><Link to="/Contact">Contact</Link></li>
<li><Link to="/Login">Login</Link></li>
</ul>
</div>
</nav>
    </>
  )
}
