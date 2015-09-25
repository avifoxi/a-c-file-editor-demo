var React = require('react');
// var FileView = require('FileView.js');

// filename
// filetype
// contents
// recursiveTree < function >

var FolderView = React.createClass({
	render: function () {
		var tree = this.props.recursiveTree( this.props.files );
		return(
			<div>
				<h3>{ this.props.filename }</h3>
				{ tree }
			</div>
		);
	}
})

module.exports = FolderView;