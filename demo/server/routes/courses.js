var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Courses = require('../models/courses')

mongoose.connect('mongodb://127.0.0.1:27017/coursedb');//连接mongodb数据库

mongoose.connection.on('connected', function () {
	console.log("MongoDB connected success.")
})

mongoose.connection.on('error', function () {
	console.log("MongoDB connected fail.")
})

mongoose.connection.on('disconnected', function () {
	console.log("MongoDB connected disconnected.")
})

router.get('/', function(req, res, next) {
	let keywords = req.param('keywords');
	let courseName = req.param('courseName');
	let page = parseInt(req.param('page'));
	let pageSize = parseInt(req.param('pageSize'));
	let sort = req.param('sort');
	let skip = (page-1)*pageSize;
	let params = {};
	if(typeof(keywords) != "undefined"){
		params = {
			'course_name': {$regex : keywords}
		}
	}
	if(typeof(courseName) != "undefined"){
		params = {
			'course_name' : courseName
		}
	}
	let courseModel = Courses.find(params).skip(skip).limit(pageSize);
	courseModel.exec(function (err,doc) {
		if(err){
			res.json({
				status:'1',
				msg:err.message
			});
		}else{
			res.json({
				status:'0',
				msg:'',
				result:{
					count:doc.length,
					list:doc
				}
			});
		}
	})
});

module.exports = router;
