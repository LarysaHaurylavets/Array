//find the average value of elements of array

var array = [1, 9, 0, 3, 11];

function averageValue(arr){
	let average; let sum=0;
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
	};
	return average=sum/arr.length;
};

console.log("Arithmetic average=" + averageValue(array));