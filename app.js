requirejs = require('requirejs');

requirejs.config({
	baseUrl: 'app'
});

var TreeBeard = requirejs('app');
var treeData = require('./examples/worldtree');

var myTree = new TreeBeard({
	stepKeys: ['cities','states','countries','continents'],
	data: treeData
});
//myTree.debug(2);

// TODO: get an items parent
// myTree.get('NY').parent();

// TODO: get a flat collection of an items immediate children
// myTree.get('NY').children();


// TODO: fetch any child at any sub level under another item
// myTree.get('USA').get('NY')
