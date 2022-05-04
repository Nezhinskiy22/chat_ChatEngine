import React from "react";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "./firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unichat!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined />
          &nbsp;Увійти з Google
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined />
          &nbsp;Увійти з FaceBook
        </div>
      </div>
    </div>
  );
};

export default Login;
