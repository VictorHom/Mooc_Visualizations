'use strict';
import './styles.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { drawCube } from './cube.js';
// var Coordinates = require('../public/public/Coordinates.js');
// require('../public/public/OrbitAndPanControls.new.js');
// import * from 'three';

var Test = React.createClass({
	render() {
		return (
			<div>
			<div>Hello Test</div>
			<div id="cube"></div>
			</div>
		);
	}
});
// add in react router;
ReactDom.render(<Test/>, document.getElementById("mooc_visualizations"));
drawCube();