'use strict';

function collectSameElements(collectionA, objectB) {
	const collectionAA = [];
	for(var index in collectionA){
		collectionAA.push(collectionA[index].key);
	}
  	const  collectionB = objectB.value;
	return  collectionC = collectionAA.filter(function(item){
		return collectionB.indexOf(item) > -1;
	});
	//return collectionC;

  //return '实现练习要求，并改写该行代码。';
}
