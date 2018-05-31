/**
 * Created by Ziaur on 30/05/2018.
 */

import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link , withRouter} from 'react-router-dom';
import EmailField from './EmailField';
import validateEmails from '../../utils/validateEmail';
import * as actions from '../../actions';
import fieldDefs from './fieldDefs';


class EmailForm extends Component{

    renderFields() {
        return _.map(fieldDefs, ({name, label}) => {
                return (<Field key={name} label={label} type="text" name={name} component={EmailField}/>)
            });


    }

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onEmailSubmit)} >
                {this.renderFields()}
                <Link to="/main" className="red button-flat btn-large white-text">
                Cancel
                </Link>
                <button type="submit"
                    className="teal button-flat btn-large right white-text">
                Send Now
                 <i className="material-icons right">done</i>
                </button>
                </form>
            </div>

    );
    }
}

function validate(values)
{
    const errors = {from:"", to:"", subject:"", cc:"", bcc:""};
    if (!values.from)
        errors.from = "You must provide a from address.";
    if (!values.to && !values.cc)
        errors.to = "You must provide at least a to/cc address.";
    if (!values.subject)
        errors.subject = "You must provide a subject."

    errors.from += validateEmails(values.from || '');
    errors.to += validateEmails(values.to || '');
    errors.cc += validateEmails(values.cc || '');
    errors.bcc += validateEmails(values.bcc || '');


    return errors;
}

export default reduxForm({
    validate,
    form: 'emailForm'
})(EmailForm);
