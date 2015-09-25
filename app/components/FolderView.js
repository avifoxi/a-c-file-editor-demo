var React = require('react');

var indentStyle = {
	marginLeft: '10%'
} 

var FolderView = React.createClass({
	render: function () {
		var tree = this.props.recursiveTree( this.props.files );
		return(
			<div>
				<h3>{ this.props.filename }</h3>
				<div style={indentStyle}>
					{ tree }
				</div>
			</div>
		);
	}
})

module.exports = FolderView;