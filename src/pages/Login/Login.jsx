import React, { useState } from "react";
import { RiCloseLine } from "@remixicon/react";
import "./Login.css";

const Login = ({ setShowLogin }) => {
  const [signStatus, setSignStatus] = useState("Sign In");

  return (
    <div className="login">
      <div className="login_form">
        <div className="login_title">
          <h2>{signStatus}</h2>
          <i onClick={() => setShowLogin(false)}>
            {" "}
            <RiCloseLine />
          </i>
        </div>
        <form>
          {signStatus === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            ""
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">{signStatus}</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form_switch">
          {signStatus === "Sign In" ? (
            <p>
              New to Here?<span onClick={()=>setSignStatus("Sign Up")}>SignUp Now</span>
            </p>
          ) : (
            <p>
              Already have Account?<span onClick={()=>setSignStatus("Sign In")}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
