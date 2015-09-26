var React = require('react');

var FileTreeView = require('./FileTreeView.js');
var FileContent = require('./FileContent.js');

// <FileContent selected={ this.state.selected }/>
var FileEditorApp = React.createClass({
	render: function () {
		return(
			<div>
				<FileTreeView 
					fileTree={ this.props.fileTree }
					selectCallback={ this.handleSelect }
				/>
				<FileContent selected={ this.state.selected }/>
			</div>
		);
	},
	getInitialState: function(){
		return {
			selected: null
		};
	},
	handleSelect: function( instance ){
		// console.log( targetProps );
		if ( this.state.selected ){
			var oldSelected = this.state.selected;
			oldSelected.setState({
				selected: false
			});
		}
		this.setState({
			selected: instance
		});
	}
});

module.exports = FileEditorApp;