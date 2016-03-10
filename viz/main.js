'use strict';
import './styles.scss';
import React from 'react';
import ReactDom from 'react-dom';

var Test = React.createClass({
	render() {
		return (<div>Hello Test</div>);
	}
});
// add in react router;
ReactDom.render(<Test/>, document.getElementById("mooc_visualizations"));