// This is the place to store sensitive API keys 
// for sendgrid and mailgun accounts
// Enter your own keys for correct configuration
//
module.exports = {
    primary_domain: 'https://api.mailgun.net',
    primary_path: '/v3/mailgun.org/messages',
    primary_key: 'YOUR-OWN-KEY-FOR-MAILGUN',
    secondary_domain: 'https://api.sendgrid.com',
    secondary_path: '/v3/mail/send' ,
    secondary_key: 'YOUR-OWN-KEY-FOR-SENDGRID'
};
