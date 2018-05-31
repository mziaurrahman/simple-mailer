/**
 * Created by Ziaur on 31/05/2018.
 */

const util = require('util');

module.exports = () => {

    const EventEmitter = require('events').EventEmitter;
    const sendMailEvents = new EventEmitter;
    const axios = require('axios');
    const keys = require('../config/keys');

    this.sendPrimary = async function (email, callback) {


        var options = {
            auth: {username: "api", password: keys.primary_key},
            url: keys.primary_domain + keys.primary_path,
            method: 'post',
            params: {
                from: email.from,
               // to: email.to,
                //cc: email.cc,
               // bcc: email.bcc,
                subject: email.subject,
                text: email.text
            }
        };
        console.log('Sending email using mailgun: '+ util.inspect(options.params));
        try {
            var res = await axios(options);
            console.log(util.inspect(res));
            callback(res.status);
        } catch (err) {
            console.log('Error Occurred:' + err + ' falling back to secondary service.')
            sendMailEvents.emit('send_secondary', email, callback);
        }
    };

    this.sendSecondary = async function(email, callback) {

        console.log('Sending email using sendgrid: '+ util.inspect(email));
        var formattedMail = '{"personalizations": [{"to": [{"email": "' + email.to + '"}],"cc": [';
        for (var i = 0; email.cc && i < email.cc.length; i++) {
            if (i)
                formattedMail += ', '
            formattedMail += '{"email":"' + email.cc[i] + '"}';
        }
        formattedMail += '], "bcc": [';

        for (var i = 0; email.bcc && i < email.bcc.length; i++) {
            if (i)
                formattedMail += ', '
            formattedMail += '{"email":"' + email.bcc[i] + '"}';
        }
        formattedMail += ']}], "from":{"email":"' + email.from + '"}, "subject":"' + email.subject + '", ';
        formattedMail += '"content":{"type": "text/plain", "value":"' + email.text + '"}}';


        var options = {
            host: keys.secondary_domain,
            // port: '80',
            path: keys.secondary_path,
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + keys.secondary_key,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(formattedMail)
            },
            body: formattedMail
        };

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + keys.secondary_key;
        try {
            var res = await axios.post(options.host + options.path, options.body);
            callback(res.status);

        } catch (err) {
            console.log('Secondary Error Occurred: ' +util.inspect(err));
            callback();
        }

    };


    sendMailEvents.on('send_primary', this.sendPrimary);
    sendMailEvents.on('send_secondary', this.sendSecondary);

    return sendMailEvents;
};