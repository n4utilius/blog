var express = require('express');
var router = express.Router();

var Blog = require("../controllers/blog")

/* GET home page. */
router.get('/', function(req, res) {
  res.json(Blog.say())
  //res.render('index', { title: Blog.say() });
});

router.get('/insert', function(req, res) {

	var data = Blog.insert({ 
		title:  "oka",
		author: "n4o",
		body:   "ola k ase",
		hidden: false,
		meta: { votes: 0, favs: 0 }
	})

  res.json(data)
});
/*
*/
router.get('/comments/:id', Blog.searchComments);



module.exports = router;
