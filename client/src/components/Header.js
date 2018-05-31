/**
 * Created by Ziaur on 29/05/2018.
 */

import React, {Component} from 'react';


class Header extends Component{
    render(){
        return (
            <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo ">Email</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Login</a></li>
            </ul>
            </div>
            </nav>
        );
    }
}

export default Header;