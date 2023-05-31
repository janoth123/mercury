// import { Button } from 'bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/mediumLogo.png";
function Nav() {
  return (
    <>
      <nav className="navContainer">
        <div className="navContent1">
          <Link to='/' className="link">
            <img className="logo" src={logo} alt="logo" />
            <div className="logoName">Medium</div>
          </Link>
        </div>

        <div className="d-flex gap-4 navContent2">
          <Link to='/Dashboard' className="Link"><p className="miniNav">Our story</p></Link>
          <p className="miniNav">Membership</p>
          <p>Write</p>
          <Link to="Login" style={{ color: "#080808", textDecoration:'none' }}>
            <p>Sign in</p>
          </Link>
          <Link to='Register'>
            <button className="btnNavGetStarted">Get started</button>
          </Link>
        </div>
      </nav>


      {/* <nav className="navContainer2">
        <div className="navContent1">
          <Link to='/' className="link">
            <img className="logo" src={logo} alt="logo" />
            <div className="logoName">Medium</div>
          </Link>
        </div>

        <div className="d-flex gap-4 navContent2">
          <Link to='Register'>
            <button className="btnNavGetStarted">Get started</button>
          </Link>
        </div>
      </nav> */}
    </>
  );
}

export default Nav;
