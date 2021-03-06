let express = require('express');
let router = express.Router();
// let btoa = require('btoa');
const loginController = require('../controllers/login');
const coustomerQuestionnaireController = require('../controllers/coustomerQuestionnaire');

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('register',{message1:""});

});

//------------------------------------------------------------------------------------------------------------------------
router.post('/password', function(req, res, next) {
    req.session.firstName=req.body.firstName;
    req.session.lastName=req.body.lastName;
    req.session.phone=req.body.phone;
    req.session.email=req.body.mail;
    req.session.userName=req.body.userName

    res.render('password');
});
//------------------------------------------------------------------------------------------------------------------------------
router.get('/password', function(req, res, next) {

    res.redirect('/register');
});
//------------------------------------------------------------------------------
router.get('/menuLogin', function(req, res, next) {

    res.render('menuLogin', {message3: "ברוכה הבאה" + " " + req.session.lastName+" "+req.session.firstName})
});

router.post('/menuLogin', function(req, res, next) {

    res.render('menuLogin', {message3: "ברוכה הבאה" + " " + req.session.firstName+" "+req.session.lastName})
});


router.post('/saveQuestionnaireData',coustomerQuestionnaireController.addingDetilsFromQuestionnaire)
// router.post('/ifCustonerFilledQuestionnaire',coustomerQuestionnaireController.ifCustonerFilledQuestionnaire);


router.post('/save', loginController.addEmail);
router.post('/findIfExit', loginController.findEmail);

module.exports = router;