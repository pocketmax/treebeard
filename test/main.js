var assert = require("assert");
var TreeBeard = require('../app');
//var myTree = new TreeBeard();

var data = {
	id: 'ROOT',
	label: 'world',
	type: 'planet',
	items: {
		NA: {
			id: 'NA',
			label: 'North America',
			type: 'continent',
			items: {
				US: {
					id: 'US',
					label: 'United States',
					type: 'country'
				}
			}
		}
	}
};

suite('Init a tree with no pre-existing data', function(){
	var myTree = new TreeBeard();

	suite('adding items', function(){

		test('should add a ROOT object without id', function(){
			var data = {
				label: 'world',
				type: 'planet'
			};
			myTree.add(data);
			assert.equal(myTree.get('ROOT').getRawValue(), data);
			assert.equal(myTree.get('ROOT').getRawValue().id, 'ROOT');
		});

		test('should add a sub-object with an id (north america)', function(){

			var data = {
				id: 'NA',
				label: 'north america',
				type: 'continent'
			};
			myTree.get('ROOT').add(data);
			assert.equal(myTree.get('NA').getRawValue(), data);
			assert.equal(myTree.get('NA').getParent().getRawValue().id, 'ROOT');

		});

		test('should add a sub-object with an id (united states)', function(){

			var data = {
				id: 'US',
				label: 'united states',
				type: 'country'
			};
			myTree.get('NA').add(data);
			assert.equal(myTree.get('US').getRawValue(), data);
			assert.equal(myTree.get('US').getParent().getRawValue().id, 'NA');

		});

		test('should add a sub-object with an id (california)', function(){

			var data = {
				id: 'CA',
				label: 'california',
				type: 'state'
			};
			myTree.get('US').add(data);
			assert.equal(myTree.get('CA').getRawValue(), data);
			assert.equal(myTree.get('CA').getParent().getRawValue().id, 'NA');

		});

	});

	suite('adding items', function(){

		test('should delete a leaf object (california)', function(){

			myTree.get('CA').delete();
			assert.equal(myTree.get('CA').getRawValue(), null);

		});

		test('should delete a leaf object with child objects under it (north america)', function(){

			myTree.get('NA').delete();
			assert.equal(myTree.get('NA').getRawValue(), null);
			assert.equal(myTree.get('US').getRawValue(), null);

		});

	});
});