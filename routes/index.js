var express = require('express');
var router = express.Router();
const url = require('url'); 

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
	NAME = req.user.name
	res.render(url.format({
		pathname:"/",
		query: {
		   "name": NAME
		}
	}));
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
