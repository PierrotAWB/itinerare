var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', ensureAuthenticated, function(req, res, next) {
//   res.render('index', { title: 'Members' });
// });
exports.index=function(req,res) {
	res.render('index', {title: 'ejs'}); };


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
