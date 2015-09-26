var React = require('react');

var FileTreeView = require('./FileTreeView.js');
var FileContent = require('./FileContent.js');

// <FileContent selected={ this.state.selected }/>
var FileEditorApp = React.createClass({
	render: function () {
		var selName, selType, contents;
		if ( this.state.selected ){
			selName = this.state.selected.props.filename;
			selType = this.state.selected.props.filetype;
			contents = this.state.selected.props.contents;
		}
		return(
			<div className='container' >
			  <div className='row'>
					<FileTreeView 
						fileTree={ this.props.fileTree }
						selectCallback={ this.handleSelect }
					/>
					<FileContent 
						filename={ selName }
						filetype={ selType }
						contents={ contents }
					/>
				</div>
			</div>
		);
	},
	getInitialState: function(){
		return {
			selected: null
		};
	},
	handleSelect: function( instance ){
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