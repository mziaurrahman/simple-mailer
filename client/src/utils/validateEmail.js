/**
 * Created by Ziaur on 30/05/2018.
 */

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
    var invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => regex.test(email) === false)


    if ( invalidEmails.length ) {
        return `Invalid emails found: ${invalidEmails}`;
    }

    return '';
}