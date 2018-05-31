/**
 * Created by Ziaur on 30/05/2018.
 */

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import fieldDefs from './fieldDefs';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const EmailPreview = ({ onCancel, formValues, sendMail, history }) => {
    const previewFields = _.map(fieldDefs, ({ name, label }) => {
            return (
        <div key={name}>
        <label>{label}</label>
        <div>
        {formValues[name]}
        </div>
        </div>
);
});

    return (
    <div>
        <h5>Confirm Sending the Email</h5>
        {previewFields}
        <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
        >
        Back
        </button>
        <button
            onClick = {()=>sendMail(formValues, history)}
            className="green btn-flat right white-text"
        >
        Send Now
        <i className="material-icons right">email</i>
        </button>
    </div>
);
};

function mapStateToProps(state) {
    return { formValues: state.form.emailForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(EmailPreview));