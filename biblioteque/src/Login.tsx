import React from "react";
import "./style.scss";

export const Login = () => {
  return (
    <div style={{ backgroundImage: `url(background.jpg)` }}>
      <h1>Login</h1>
      <div className="container">
        <p>email:</p>
        <input type="email" />
        <p>password:</p>
        <input type="password" />
      </div>
      <div className="container">
        <button className="button">Sign in</button>
        <button className="button">Sign out</button>
      </div>
    </div>
  );
};
