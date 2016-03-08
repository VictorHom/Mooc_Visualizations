"use strict";
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import flash from 'flash';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
module.exports = app;

let publicPath = path.join(__dirname, '../public');
let nodeModulesPath = path.join(__dirname, '../node_modules');
let indexHtmlPath = path.join(__dirname, '../index.html');

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
app.get('/*', (req,res) => {
	res.sendFile(indexHtmlPath);
});

app.use((err, req, res, next) => {
	res.status(err.status).send(err.message);
});
