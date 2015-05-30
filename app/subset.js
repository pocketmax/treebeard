define([],function(){

	return function(){

		var data = {};

		this.get = function(key){
			return data[key] || null;
		};

		this.getAll = function(){
			return data;
		};

		this.delete = function(key){
			if(Array.isArray(key)){
				for(var i = 0; i<key.length; i++){
					this.delete(key[i]);
				}
				return true;
			}

			delete data[key];

		};

		this.add = function(itemKey, children){
			if(!itemKey || !children){
				return false;
			}

			if(!data[itemKey] ){
				data[itemKey] = {};
			}

			// populate items cache with children
			for(var i in children){
				data[itemKey][i]=children[i];

				var childItems = data[i];
				for(var x in childItems) {
					data[itemKey][x]=childItems[x];
				}
			}

		};

		this.debug = function(level){
			console.log("\nsubset...");
			console.log('-------------');
			switch (level) {
				case 2:
					console.log('IDs: ' + Object.keys(data).join());
				case 1:
					console.log('total rec: ' + Object.keys(data).length);
			};
		};

	};
});