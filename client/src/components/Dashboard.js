/**
 * Created by Ziaur on 30/05/2018.
 */

import React, {Component} from 'react';
import {Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div >

            <h1>Dashboard</h1>
            <div className="fixed-action-btn">
                <Link to="/email" className="btn-floating btn-large red center">
                <i className= "material-icons ">add</i>
                </Link>
            </div>

        </div>

    );
}

export default Dashboard;