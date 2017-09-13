//find sum of elements of array

var array = [1, 9, 0, 3, 11];

function amount(arr){
	let sum=0;
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
	};
	return sum;
};

console.log("Amount of elements=" + amount(array));