/**
 * Created by Ziaur on 30/05/2018.
 */
import { SENDMAIL } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case SENDMAIL:
            return action.payload;
        default:
            return state;
    }
}