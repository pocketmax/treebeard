define([],function(){

	return function(){

		var data = {};

		this.get = function(key){
			return data[key] || null;
		};

		this.add = function(itemKey, parentItem, parentKey){
			if(!itemKey || !parentItem || !parentKey){
				return false;
			}

			if(!data[itemKey] ){
				data[itemKey] = {};
			}

			if(!data[itemKey][parentKey] ){
				data[itemKey][parentKey] = {};
			}
			data[itemKey][parentKey]=parentItem;

			var parentsData = this.get(parentKey);
			for(var i in parentsData){
				data[itemKey][i]=parentsData[i];
			}

		};

		this.debug = function(level){
			console.log("\nsuperset...");
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