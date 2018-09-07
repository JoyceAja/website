var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/send', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message}`;

  let mail = {
    from:name,
    to: 'ajagbe.joyce@gmail.com',
    subject: 'Message from contact form',
    text: content
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
