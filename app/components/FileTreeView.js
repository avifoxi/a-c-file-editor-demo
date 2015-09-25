var React = require('react');

var FileTreeView = React.createClass({
	render: function() {
		var tree = this.props.fileTree.map(function(el){
			let text = el.isFolder ? 'Folder' : 'File';
			console.log(text);
			return(
				<div>
					I am a { text }!
				</div>
			);
		});
		// debugger;
		return (

			<div>
				{ tree }
			</div>
		);
	}
});

module.exports = FileTreeView;