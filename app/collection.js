define([],function(){

	return function(){

		var data = {};

		this.get = function(key){
			return data[key] || null;
		};

		this.add = function(itemKey, item){
			if(!itemKey || !item){
				return false;
			}

			if(!data[itemKey] ){
				data[itemKey] = {};
			}

			data[itemKey]=item;
		};

		this.debug = function(level) {
			console.log("\ncollection...");
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