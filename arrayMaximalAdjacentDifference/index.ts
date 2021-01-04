function arrayMaximalAdjacentDifference(inputArray: number[]):number{
	let difference = 0;
	let maxDifference = 0

	for(let i = 0; i < inputArray.length; i++) 
	{
		if(i !== inputArray.length - 1) {
			difference = Math.abs(inputArray[i] - inputArray[i + 1]);
		}	
		if(difference > maxDifference) {
			maxDifference = difference
		}
		console.log(difference)
	}
	console.log(difference)
	return maxDifference
}

function arrayMaximalAdjacentDifference2(inputArray: number[]):number{
	let maxDifference = Math.abs(inputArray[0] - inputArray[1])
	for(let i = 0; i < inputArray.length; i++) {

		let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
		console.log(absoluteDiff)
		maxDifference = absoluteDiff > maxDifference ? absoluteDiff : maxDifference
	}
	return maxDifference
}

let array = [2, 4, 1, 0, 10 , 2, 11,2,20];
console.log(arrayMaximalAdjacentDifference(array))