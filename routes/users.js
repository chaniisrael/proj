var express = require('express');
var router = express.Router();

const loginController = require('../controllers/login');

/* GET users listing. */
 console.log('22');
// router.get('/', function(req, res, next) {
//   res.render('index');
// });
// menuLogin.ejs
router.post('/findEmail',loginController.findEmail);
router.post('/findUserName',loginController.findUserName);
router.post('/findUser',loginController.findUser);

module.exports = router;
