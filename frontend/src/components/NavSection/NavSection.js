import React from 'react';
import Classes from './NavSection.css';
import {NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const navSection = ({ user }) => {
    const history = useHistory();

    return (
        <header id = 'NavSection' className={Classes.body}>
            <p className = {Classes.logo_name}>Stocks</p>
            <nav>
                <ul className={Classes.nav__links}>
                    <li><NavLink className={Classes.link} to={{pathname: '/',}}>Main Page</NavLink></li>
                    <li><NavLink className={Classes.link} activeClassName={Classes.active} to={{pathname: '/DataPortal'}}>Data Portal</NavLink></li>
                    <li><NavLink className={Classes.link} activeClassName={Classes.active} to={{pathname: '/MarketSummary'}}>Market Summary</NavLink></li>
                </ul>
            </nav>
            {!user && <div>
                <button onClick={() => history.push('/Login')} className={Classes.btn}>Log In</button>
                <button onClick={() => history.push('/Signup')} className={Classes.btn + " " + Classes.signup}>Sign Up</button>
            </div>}
            {user && <div>
                <span className={Classes.signupSpan}>{user.name}</span>
                <button onClick={() => history.push('/Logout')} className={Classes.btn}>Log Out</button>
            </div>}
            
   
        </header>
            
       
    );
}

export default navSection