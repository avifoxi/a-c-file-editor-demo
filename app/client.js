var data = require('./data/files.json');
var TreeView = require('./components/FileTreeView.js');
var React = require('react');




React.render(< TreeView fileTree={data} />, document.getElementById('mount'));
