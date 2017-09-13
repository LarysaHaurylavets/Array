//find the min element

//1-st way

var array=[9, 10, 6, 1,-5, 7];

function minElement(arr){
	let min=arr[0]; let index;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]<min){
			min=arr[i];
			index=i;
		};
	};
	console.log('MIN ELEMENT:' + min);
	console.log('INDEX OF MIN ELEMENT:' + index);
};

minElement(array);

//2-d way

function anotherMinElement(arr){
	let min = Math.min.apply(null, arr);
	let index = arr.indexOf(min);

	console.log('MIN ELEMENT:' + min);
	console.log('INDEX OF MIN ELEMENT:' + index);
};

anotherMinElement(array);

