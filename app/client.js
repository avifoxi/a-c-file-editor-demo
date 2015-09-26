var data = require('./data/files.json');
var TreeView = require('./components/FileTreeView.js');
var React = require('react');
// debugging help
window._ = require('lodash');

React.render(< TreeView fileTree={data.files} />, document.getElementById('mount'));