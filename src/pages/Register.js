import React from "react";
import { Link } from "react-router-dom";

function Register() {
return (
    <>
      <div className="registerContainer">
        <div className="registerContent">
          <div className="registerHeader">
            <Link className="link" to="/">
              <div className="logoName">Join Medium</div>
            </Link>
          </div>

          <input type="text" placeholder="Username" />
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Create Password"
              minLength={4}
              maxLength={16}
            />
          </div>

          <button className="btnUserRegister">Sign in</button>
          <p>Already have an account? <Link to="/Login" style={{ textDecoration:'none', fontSize:'14px' }}>Sing in</Link></p>
        </div>
      </div>
    </>
  );
}

export default Register;
