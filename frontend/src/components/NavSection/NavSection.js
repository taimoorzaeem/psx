import React from "react";
import Classes from "./NavSection.css";
import { NavLink } from "react-router-dom";

const navSection = ({ user }) => {
  return (
    <div id="NavSection" className={Classes.body}>
      <ul className={Classes.navigation}>
        <li className={Classes.nav}>
          <NavLink
            className={Classes.link}
            to={{
              pathname: "/",
            }}
          >
            Main Page
          </NavLink>
        </li>
        <li className={Classes.nav}>
          <NavLink
            className={Classes.link}
            to={{
              pathname: "/DataPortal",
            }}
          >
            Data Portal
          </NavLink>
        </li>
        <li className={Classes.nav}>
          <NavLink
            className={Classes.link}
            to={{
              pathname: "/MarketSummary",
            }}
          >
            Market Summary
          </NavLink>
        </li>
        {!user && <React.Fragment>
          <li className={Classes.nav}>
            <NavLink
              className={Classes.link}
              to={{
                pathname: "/Login",
              }}
            >
              Login
            </NavLink>
          </li>
          <li className={Classes.nav}>
            <NavLink
              className={Classes.link}
              to={{
                pathname: "/Signup",
              }}
            >
              Signup
            </NavLink>
          </li>
        </React.Fragment>}
        {user && <React.Fragment>
          <li className={Classes.nav}>
            <NavLink
              className={Classes.link}
              to={{
                pathname: "/profile",
              }}
            >
              Profile
            </NavLink>
          </li>
          <li className={Classes.nav}>
            <NavLink
              className={Classes.link}
              to={{
                pathname: "/Logout",
              }}
            >
              Logout
            </NavLink>
          </li>
        </React.Fragment>}
      </ul>
    </div>
  );
};

export default navSection;
