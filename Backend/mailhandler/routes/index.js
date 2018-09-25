var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
const creds = require('../config/config');

/* GET home page. */
router.post('/send', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message}`;

  let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    auth: {
        user:creds.USER,
        pass:creds.PASS
    }
})
let mail = {
    from:name,
    to: 'ajagbe.joyce@gmail.com',
    subject: 'Message from contact form',
    text: content
  }

// transporter.verify((error,success) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Server will now take your message')
//     }
// })

  transporter.sendMail(mail, (err,data) => {
    console.log('here baby')
    if(err){
      console.log('err', err)
      res.json({
        msg:'fail'
      })
    }else{
      console.log('yayy success')
      res.json({
        msg:'success'
      })
    }
  })
});

module.exports = router;
