// bubble sort

var array = [1, 9, 0, 3, 11];

function sortArray(arr){
	let temp;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if(arr[j+1]<arr[j]){
				temp=arr[j+1];
				arr[j+1]=arr[j];
				arr[j]=temp;
			};
		};
	};
	return arr;
};

console.log("New array: " + sortArray(array)); // 0,1,3,9,11


//another way

console.log("Sort: " + array.sort()); // 0,1,11,3,9