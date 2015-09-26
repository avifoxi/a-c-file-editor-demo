var React = require('react');

var FileTreeView = require('./FileTreeView.js');
var FileContent = require('./FileContent.js');

// <FileContent selected={ this.state.selected }/>
var FileEditorApp = React.createClass({
	render: function () {
		return(
			<div>
				<FileTreeView fileTree={ this.props.fileTree }/>
				<FileContent selected={ this.state.selected }/>
			</div>
		);
	},
	getInitialState: function(){
		return {
			selected: null
		};
	}
});

module.exports = FileEditorApp;