'use strict';

function collectSameElements(collectionA, objectB) {
	const  collectionB = objectB.value;
	const  collectionC = collectionA.filter(function(item){
		return collectionB.indexOf(item) > -1;
	});
	return collectionC;
  //return '实现练习要求，并改写该行代码。';
}
