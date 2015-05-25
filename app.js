requirejs = require('requirejs');

requirejs.config({
	baseUrl: 'app'
});

var TreeBeard = requirejs('app');
var treeData = require('./worldtree');

var myTree = new TreeBeard({
	stepKeys: ['cities','states','countries','continents'],
	data: treeData
});
myTree.debug();


// ADD A ROOT ITEM - no other item in store
/*
treeData = {
	bar: true
};
*/

// get an item by id
// myTree.get('US').value;

// get an items parent
// myTree.get('NY').parent();

// get a flat collection of an items immediate children
// myTree.get('NY').children();

// add a child item to an existing item
// myTree.get('AZ').value.MSA={label: 'Mesa'};
// or
// treeData.continents.NA.US.AZ.MSA = {label: 'Mesa'};

// cascade delete an item
// delete treeData.continents.NA.US.AZ;
// or
// delete myTree.get('AZ').value;

// fetch any child at any sub level under another item
// myTree.get('USA').get('NY')
