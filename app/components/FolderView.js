var React = require('react');

var indentStyle = {
	marginLeft: '10%'
} 

var FolderView = React.createClass({
	render: function () {
		var plusMinus, tree;
		if ( this.state.expanded ){
			tree = this.props.recursiveTree( this.props.files );
		 	plusMinus = '-';
		} else {
			plusMinus = '+';
		}
		return(
			<div>
				<h3>
					<span onClick={ this.toggleEx } >
						{ plusMinus }
					</span>
					{ this.props.filename }
				</h3>
				<div style={indentStyle}>
					{ tree }
				</div>
			</div>
		);
	},
	getInitialState: function(){
		return {
			expanded: false
		};
	},
	toggleEx: function(){
		this.setState({
			expanded: !this.state.expanded
		});
	}
})

module.exports = FolderView;