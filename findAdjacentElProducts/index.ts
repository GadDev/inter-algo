function adjacentElementsProduct(inputArray: number[]): number {
	let productResult = 0;
	let resultProductArr = []
	for(let i = 0; i < inputArray.length; i++) {
		if(i !== inputArray.length - 1) {
			productResult = inputArray[i] * inputArray[i + 1]
			resultProductArr.push(productResult);

		} 
	}
	return Math.max(...resultProductArr);

	// simple solution
	// let largestProduct = input[0] * input[1]
	// for(let i = 0; i < inputArray.length - 1; i++) {
	// 	if(i !== inputArray.length - 1) {
	// 		const product = inputArray[i] * inputArray[i + 1]
	// 		largestProduct = largestProduct < product ? product : largestProduct

	// 	} 
	// }
	// return largestProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([33, 61, -20, -50, 76, 3]));
console.log(adjacentElementsProduct([1, 2, 3, 4, 5, 6, 8, 8, 9, -22]));