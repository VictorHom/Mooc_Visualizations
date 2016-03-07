//Converter Class 
'use strict';
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var fs = require('fs');

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');


function insertDocuments(arr) {
	return Student.createAsync(arr)
}


var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("./cleanData.csv",function(err,students){
	var connectToDb = require('./index');
	var Student = Promise.promisifyAll(mongoose.model('StudentData'));
	fs.readdir('./data/', function(err, files) {
		let availableToInsert = true;
		let arrOfPromises = Promise.all(files);

		Promise.resolve(arrOfPromises).each(function(filename) {
				if (filename.indexOf("cleanDataArray") !== -1){
					let students = require('./data/' + filename);
					console.log(filename);
					return Student.createAsync(students)
				}
		})
	});
});
