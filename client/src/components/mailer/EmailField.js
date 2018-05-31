/**
 * Created by Ziaur on 30/05/2018.
 */

//contains logic to render a field and label

import React from 'react';

export default ({input, label, meta:{error, touched}}) => {

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginbottom: '5px'}}/>
            <div className="red-text">
            {touched && error }
            </div>
        </div>
    );
};