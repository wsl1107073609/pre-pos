'use strict';

function collectSameElements(collectionA, collectionB) {
  //method1:
  const collectionC = collectionA.filter(function(item){
  	return collectionB[0].indexOf(item) > -1
  });
  return collectionC;



  /*const  collectionC = [];
  for(var i=0;i<collectionA.length;i++){
  	for(var j=0;j<collectionB[0].length;j++){
  		if(collectionA[i]==collectionB[0][j]){
  			collectionC.push(collectionA[i]);
  			break;
  		}
  	}
  }
  return collectionC;*/

  //return '实现练习要求，并改写该行代码。';
}
