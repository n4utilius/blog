var Blog = require("../models/blog")
var ObjectId = require('mongoose').Types.ObjectId; 

//test['stuff.category'] = new ObjectId(req.param('catID')); 


module.exports = {
	say: function(){
		return "ola k ase"
	},
	insert: function(data){
		var post = new Blog(data)
		post.save()
		return post
	},
	searchComments: function(req, res){
		Blog.findOne({_id: ObjectId(req.params.id)}, function(error, data){
			console.log(data)
			res.send(data)
		})
	}
}
