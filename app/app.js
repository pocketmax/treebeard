define(['walk','superset','subset','collection','observed'], function(Walk, Superset, Subset, Collection, observed){

	return function(cfg){

		var mySuperset = new Superset(),
			mySubset = new Subset(),
			myCollection = new Collection(),
			myWalker = new Walk();

		myWalker.stepKeys(cfg.stepKeys);
		myWalker.dataset(cfg.data);

		var ee = observed(cfg.data);

		ee.on('delete', function(cfg){
			var keys = Object.keys(mySubset.get(cfg.name));
			keys.push(cfg.name);
			mySubset.delete(keys);
			console.log(mySubset.getAll());
		});

		myWalker.on('beforeLeaf', function(item, itemKey, parentItem, parentKey){

			myCollection.add(itemKey, item);

			mySuperset.add(itemKey, parentItem, parentKey);

		});

		myWalker.on('afterLeaf',function(item, itemKey, children){

			mySubset.add(itemKey, children);

		});
		myWalker.run();

		this.value = null;

		this.get = function(id){
			this.value = myCollection.get(id);
	//		currentNode = index.get(id);
			return this;
		};

		this.getRoot = function(){
			return cfg.data;
		};

		this.isRoot = function(){
		};

		this.parent = function(){
			return this;
		};

		this.children = function(){
		};


		this.debug = function(level){
			mySubset.debug(level);
			mySuperset.debug(level);
		}
	};

});
