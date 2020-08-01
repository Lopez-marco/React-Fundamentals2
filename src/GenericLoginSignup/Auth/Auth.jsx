//
import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  ///          if login is? true(loging) else: (signup)
  const title = isLogin ? "Loging" : "Signup";

  function Toggle(e) {
    e.preventDefault();
    if (isLogin == true) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }

  return (
    <div>
      <from action={title}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="text" id="password" />
        <br />
        <button onClick={(e) => Toggle(e)}>Toggle Signup/Login</button>
        <br />
        <button>Submit</button>
      </from>
    </div>
  );
};

export default Auth;
