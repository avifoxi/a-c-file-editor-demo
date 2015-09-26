var React = require('react');

// in Flux architecture -- these might be defined as constants
// but for demo -- contentMap lives with FileContent UI 
const CONTENT_TYPES = ['text', 'image'];

const extToType = {
	"txt": CONTENT_TYPES[0], 
	"ico": CONTENT_TYPES[1], 
	"jpg": CONTENT_TYPES[1], 
	"doc": CONTENT_TYPES[0], 
	"json": CONTENT_TYPES[0], 
	"png": CONTENT_TYPES[1], 
	"js": CONTENT_TYPES[0]
};

var FileContents = React.createClass({
	render: function () {
		return(

		);
	}
})