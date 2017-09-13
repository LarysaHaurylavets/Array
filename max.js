//find the max element
//1-st way

var array=[9, 10, 6, 1,-5, 7];

function maxElement (arr){
	let max=array.length-1;
	let index;

	for (var i = 0; i < arr.length; i++) {
		if(arr[i]>max){
			max=arr[i];
			index=i;
		};
	};
	console.log('MAX ELEMENT:' + max);
	console.log('INDEX OF MAX ELEMENT:' + index);

};

maxElement(array);

//2-d way

function anotherMaxElement(arr){
	let max= Math.max.apply(null, arr);
	let index = arr.indexOf(max);

	console.log('MAX ELEMENT:' + max);
	console.log('INDEX OF MAX ELEMENT:' + index);
};

anotherMaxElement(array);

//3 way

console.log(array.sort().pop());
console.log(array.sort().shift());