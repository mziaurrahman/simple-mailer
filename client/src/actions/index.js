/**
 * Created by Ziaur on 30/05/2018.
 */

import axios from 'axios';
import { SENDMAIL } from './types';

export const sendMail = (values, history) => async dispatch => {

  const res = await axios.post('/api/sendmail', values);
  history.push('/');
  dispatch({type: SENDMAIL, payload: res.data});

};