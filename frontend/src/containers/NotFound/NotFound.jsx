import React, { Component } from "react";
import Classes from './NotFound.css';

class NotFound extends Component {
    render() { 
        return (<div>
            <h1 className={Classes.h1}>404 <br/>Not Found</h1>
        </div>);
    }
}
 
export default NotFound;

