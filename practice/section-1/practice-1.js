'use strict';

function collectSameElements(collectionA, collectionB) {
	 //method1:
	 const collectionC = collectionA.filter((item)  => {
	 	return collectionB.indexOf(item) > -1;
	 });	 
	 return collectionC;

	 //method2:
	/* const collectionC = [];
	 for(var index in collectionA){
	 	// debugger
	 	if(collectionB.indexOf( collectionA[index]) > -1){
	 		collectionC.push(collectionA[index]);
	 	}
	 }
	 return collectionC;*/


	 //method3:
/*	 const collectionC = [];
	 for(var item of collectionA){
	 	// debugger
	 	if(collectionB.indexOf(item) > -1){
	 		collectionC.push(item);
	 	}
	 }
	 return collectionC;*/


  //method4:
  //const collectionC = [];
  // for(var i=0;i<collectionA.length;i++){
  // 	for(var j=0;j<collectionB.length;j++){
  // 		if(collectionA[i]==collectionB[j]){
  // 			collectionC.push(collectionA[i]);
  // 			break;
  // 		}
  // 	}
  // }
  //return collectionC;
  //return '实现练习要求，并改写该行代码。';
}
