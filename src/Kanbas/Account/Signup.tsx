import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input id="wd-username" placeholder="username" className="form-control mb-2"  />
      <input id="wd-password" placeholder="password" type="password" className="form-control mb-2"/>
      <input id="wd-verify-password" className="form-control mb-2" placeholder="verify password" type="password" />
      <Link  id="wd-signup-btn" to="/Kanbas/Account/Signup" className="btn btn-primary w-100"> Sign up </Link><br />
      <Link  id="wd-signin-btn" to="/Kanbas/Account/Signin" className="btn btn-secondary w-100" style={{marginTop: "4px"}}>Sign in</Link>
    </div>
);}
