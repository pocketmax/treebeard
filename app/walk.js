define(['events'], function(Events){

	var eventEmitter = new Events.EventEmitter();

	return function(){

		var stepKeyList = [];
		var dataset = null;
		var that = this;

		// set which keys in object hold other objects i.e. steps
		this.stepKeys = function(stepList){
			stepKeyList = stepList;
		};

		// run the specified object
		this.dataset = function(data){
			dataset = data;
		};

		var getStepGroups = function(obj){
			var results = {};
			for(var i=0; i<stepKeyList.length; i++){
				var stepKey = stepKeyList[i];
				// current step has a step in it so lets walk down it
				if(obj[stepKey]){
					results[stepKey]=obj[stepKey];
				}
			}
			return results;
		};

		// iterate over collection passing each item and key to cb(item, key)
		var eachItem = function(items, cb){
			for(var key in items){
				cb(items[key], key);
			}
		};

		this.on = function(){
			eventEmitter.on.apply(this, arguments);
		};

		// traverse object tree with cb on each leaf
		this.run = function(cStep, cStepKey, pStep, pStepKey, cStepGroup, cStepGroupKey){
			cStep = cStep || dataset;
			cStepKey = cStepKey || null;
			pStep = pStep || null;
			pStepKey = pStepKey || null;
			cStepGroup = cStepGroup || null;
			cStepGroupKey = cStepGroupKey || null;


			// fire beforeLeaf event here with the following args...
			// this.beforeLeaf(cStep, cStepKey, pStep, pStepKey, cStepGroup, cStepGroupKey);
			eventEmitter.emit.call(that, 'beforeLeaf', cStep, cStepKey, pStep, pStepKey, cStepGroup, cStepGroupKey);

			// get list of found step groups in current object (stepList)
			var foundStepGroupsList = getStepGroups( cStep );
			var cStepAfter = cStep;
			var cStepAfterKey = cStepKey;

			// pre-fetch children
			var children = {};
			eachItem(foundStepGroupsList, function( sGroup ){
				eachItem(sGroup, function( item, itemKey ){
					children[itemKey]=item;
				});
			});

			// if step groups present, traverse them
			if(Object.keys(foundStepGroupsList).length){

				pStep = cStep;
				pStepKey = cStepKey;

				// iterate over each found stepGroup found in currentStep
				eachItem(foundStepGroupsList, function( sGroup, sGroupKey ){

					cStepGroup = sGroup;
					cStepGroupKey = sGroupKey;

					eachItem(sGroup, function( item, itemKey ){

						cStep = item;
						cStepKey = itemKey;
						that.run(cStep, cStepKey, pStep, pStepKey, cStepGroup, cStepGroupKey);

					});

				});

			}

			// children = col of all the direct children for the current stepItem
			eventEmitter.emit.call(that, 'afterLeaf', cStepAfter, cStepAfterKey, children);

		};
	};

});