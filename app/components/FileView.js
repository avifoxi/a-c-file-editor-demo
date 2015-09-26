var React = require('react');

var selectedStyle = {
	backgroundColor: 'purple',
	color: 'white'
}

var FileView = React.createClass({
	render: function() {
		//<p>
				// 	{ this.props.contents }
				// </p>
		var style;
		if ( this.state.selected )
			style = selectedStyle;

		return (
			<div>
				<h3
					onClick={ this.handleClick }
					style={ style }
				>
					{this.props.filename}.{ this.props.filetype }
				</h3>
			</div>
		);
	},
	getInitialState: function(){
		return {
			selected: false
		};
	},
	handleClick: function(){
		if ( this.state.selected ){
			return;
		}
		this.setState({
			selected: true
		});
		this.props.selectCallback( this );
	}
});

module.exports = FileView;