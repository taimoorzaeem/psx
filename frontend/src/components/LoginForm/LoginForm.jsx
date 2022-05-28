import React, { Component } from "react";
import axios from 'axios';
import Classes from "./LoginForm.css";

class LoginForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    try {
      const { data: jwt } = await axios.post('http://localhost:5000/api/auth', user);
      localStorage.setItem('token', jwt);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
      }
    }
    
  };


  render() {
    return (
      <div className={Classes.loginFormContainer}>
        <h1 className={Classes.loginH1}>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className={Classes.loginFormGroup}>
            <input 
                id="email"
                name="email"
                type="email" 
                className={Classes.loginFormInput} 
                placeholder="Email" 
            />
          </div>
          <div className={Classes.loginFormGroup}>
            <input
              id="password"
              name="password"
              type="password"
              className={Classes.loginFormInput}
              placeholder="Password"
            />
          </div>
          <div>
            <button className={Classes.loginButton}>Login</button>
          </div>
          <span>
            Don't have an account? <a href="/Signup">Signup Now!</a>
          </span>
        </form>
      </div>
    );
  }
}

export default LoginForm;
