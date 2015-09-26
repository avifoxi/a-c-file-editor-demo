var React = require('react');

var FileView = require('./FileView.js');
var FolderView = require('./FolderView.js');

var contents = [];

var FileTreeView = React.createClass({
	recursiveTree: function( files ){
		var recurse = this.recursiveTree;
		var tree = files.map(function(el){
			if ( el.isFolder ){
				return (
					< FolderView 
						key={ el.filename }
						filename={ el.filename }
						files={ el.files }
						recursiveTree={ recurse }
					/>
				);
			} else {
				contents.push( el.filetype );
				return(
					< FileView
						key={ el.filename } 
						filename={ el.filename }
						filetype={ el.filetype }
						contents={ el.contents } 
					/>
				);
			}
		});
		console.log( contents );
		return tree;
	},
	render: function() {

		return (
			<div>
				{ this.recursiveTree( this.props.fileTree ) }
			</div>
		);
	}
});

module.exports = FileTreeView;