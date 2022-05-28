import React, { Component } from "react";
import axios from "axios";
import Classes from "./SignupForm.css";

class SignupForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/users", user);
      localStorage.setItem('token', response.headers['x-auth-token']);
      window.location = '/';
    } catch (ex) {
      console.log(ex.response.data);
    }
    
  };

  render() {
    return (
      <div className={Classes.signupFormContainer}>
        <h1 className={Classes.signupH1}>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className={Classes.formGroup}>
            <input
              name="name"
              type="text"
              className={Classes.signupFormInput}
              placeholder="Name"
            />
          </div>
          <div className={Classes.formGroup}>
            <input
              name="email"
              type="email"
              className={Classes.signupFormInput}
              placeholder="Email"
            />
          </div>
          <div className={Classes.formGroup}>
            <input
              name="password"
              type="password"
              className={Classes.signupFormInput}
              placeholder="Password"
            />
          </div>
          <input className={Classes.signupCheckbox} name="box" type="checkbox" />
          <span>
            I agree to <a>terms and conditions.</a>
          </span>
          <br />
          <br />
          <button className={Classes.signupButton}>Signup</button>
          <br />
          <br />
          <span>
            Already have an account? <a href="/Login">Login Now!</a>
          </span>
        </form>
      </div>
    );
  }
}

export default SignupForm;
