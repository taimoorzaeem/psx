import React, { Component } from "react";
import DataPortal from "./DataPortal/DataPortal";
import MarketSummary from "./MarketSummary/MarketSummary";
import Login from "./Login/Login";
import jwtDecode from 'jwt-decode';
import Signup from "./Signup/Signup";
import Logout from "./Logout/Logout";
import Main_Page from "./MainPage/main_page";
import Classes from "./App.css";
import "../components/LoginForm/LoginForm.css";
import { Switch, Route } from "react-router-dom";
import NavSection from "../components/NavSection/NavSection";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <div className={Classes.body}>
        <NavSection user={this.state.user}/>
        <Switch>
          <Route path="/" exact component={Main_Page} />
          <Route path="/DataPortal" component={DataPortal} />
          <Route path="/MarketSummary" component={MarketSummary} />
          <Route path="/Login" component={Login} />
          <Route path="/Logout" component={Logout} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
