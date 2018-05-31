# Simple Mailer

### This is a simple fault tolerant mail client and server

This application tries to send emails using sendgrid and mailgun accounts.
The account keys are held in 

[`/server/config/keys.js`](/server/config/keys.js)

file and need to be set manually for proper functioning of the application.

## Run Server

From the server directory execute command 
### `node index.js` 

The server will listen to port 5000 by default. You may configure another PORT in the shell to run in the designated port.

## Run Client
From the client directory execute command
### `npm start` 
which will keep the application running on port 3000.

