import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{backgroundColor: '#DAE5D0', width: '100%', height:'100%'}}>
          <LoginForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
