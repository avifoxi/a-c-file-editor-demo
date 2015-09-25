var React = require('react');

var FileView = React.createClass({
	render: function() {
		return (
			<div>
				<h3>{this.props.filename}</h3>
				<p>
					{ this.props.filetype }
					{ this.props.contents }
				</p>
			</div>
		);
	}
});

module.exports = FileView;