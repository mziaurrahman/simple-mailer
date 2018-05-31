/**
 * Created by Ziaur on 30/05/2018.
 */

const util = require('util');
const mailer = require('../util/mailEmitter')();

module.exports = (app) =>
{
    app.get('/', (req, res) => {
        res.send({Hi: ' Server is Running!'})
    });

    app.post('/api/sendmail', async (req, res) => {

        console.log('Inside sendmail::'+util.inspect(req.body));
        const email = { from, to, subject, body, cc, bcc} = req.body;

        mailer.emit('send_secondary', email,
            (status) => { res.send(status);});

    });

};
