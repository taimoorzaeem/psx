import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <LoginForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
