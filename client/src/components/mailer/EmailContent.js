/**
 * Created by Ziaur on 30/05/2018.
 */

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import EmailForm from './EmailForm';
import EmailPreview from './EmailPreview';

class EmailContent extends Component {
    state = { showPreview: false };

    renderContent() {
        if (this.state.showPreview) {
            return (
                <EmailPreview
            onCancel={() => this.setState({ showPreview: false })}
        />
        );
        }

        return (
            <EmailForm
        onEmailSubmit={() => this.setState({ showPreview: true })}
    />
    );
    }

    render() {
        return (
            <div>
            {this.renderContent()}
    </div>
    );
    }
}

export default reduxForm({
    form: 'emailForm'
})(EmailContent);