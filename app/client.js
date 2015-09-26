var data = require('./data/files.json');
var App = require('./components/FileEditorApp.js');
var React = require('react');

// for debugging help
window._ = require('lodash');

React.render(< App fileTree={data.files} />, document.getElementById('mount'));