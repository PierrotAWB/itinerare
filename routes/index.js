var express = require('express');
var router = express.Router();
const url = require('url'); 

router.use('/users', require('./users'));

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
	res.render('index', {locals: { title: 'Members', name: req.user.name }});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
