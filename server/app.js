"use strict";

var path = require('path'),
	express = require('express'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('flash'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session');


var app = express();

module.exports = app;

var publicPath = path.join(__dirname, '../public');
var nodeModulesPath = path.join(__dirname, '../node_modules');
var indexHtmlPath = path.join(__dirname, '../index.html');

// sserving up the static assets
app.use(express.static(publicPath));
app.use(express.static(nodeModulesPath));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


// required for passport
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());

//app.use('/api/students', require('./students'));
app.get('/*', function(req,res) {
	console.log("index get");
	res.sendFile(indexHtmlPath);
});

app.use(function(err, req, res, next) {
	res.status(err.status).send(err.message);
});
