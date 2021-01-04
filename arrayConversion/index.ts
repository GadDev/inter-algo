// my solution
function arrayConversion(inputArray: number[]):number[] {
	let firstIterationArray = [];
	let secondIterationArray = [];
	let arrayConverted = [];
	for(let i = 0; i < inputArray.length; i++ ) {
		if(i % 2 == 0 && i !== inputArray.length -1){
			console.log(i)
			console.log(inputArray[i])
			firstIterationArray.push(inputArray[i] + inputArray[i + 1])
		}
	}
	for(let i = 0; i < firstIterationArray.length; i++) {
		if(i % 2 == 0) {
			secondIterationArray.push(firstIterationArray[i] * firstIterationArray[i + 1] )
		} 
	}
	console.log(firstIterationArray)
	let total = parseInt(secondIterationArray.reduce((acc, currentValue) => acc + currentValue));
	arrayConverted.push(total)
	return arrayConverted
}

// other solution
function arrayConversion2(inputArray: number[]):number {
	let isOdd = true;
	while(inputArray.length !== 1) {
		console.log(inputArray)
		inputArray = sumProduct(inputArray, isOdd);
		console.log(isOdd)
		isOdd = !isOdd
	}

	return inputArray[0]
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
	const sumProducts: number[] = [];

	if(isOdd) {
		for(let i = 0; i < nums.length; i += 2) {
			sumProducts.push(nums[i] + nums[i + 1]);
		}
	}else {
		for(let i = 0; i < nums.length; i += 2) {
			sumProducts.push(nums[i] * nums[i + 1]);
		}
	}
	return sumProducts
}

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8]
let b = [2,3,5,7,8,3,7,66]
console.log(arrayConversion(b))
console.log(arrayConversion2(b))