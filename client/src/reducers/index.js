/**
 * Created by Ziaur on 29/05/2018.
 */

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import emailReducer from './emailReducer';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    mails: emailReducer
});
