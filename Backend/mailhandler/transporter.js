let nodemailer = require('nodemailer');
const creds = require('../config/config');

let transport = {
    host:'smtp.gmail.com',
    auth: {
        user:creds.USER,
        pass:creds.PASS
    }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error,success) => {
    if(error){
        console.log(error);
    }else{
        console.log('Server will now take your message')
    }
})