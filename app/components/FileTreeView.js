var React = require('react');

var FileTreeView = React.createClass({
	render: function() {
		return (
			<div>
				<p>{ this.props.fileTree }</p>
			</div>
		);
	}
});

module.exports = FileTreeView;