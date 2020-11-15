
function absoluteValuesSumMinimization(a: number[]): number {
	// if(1 < a.length && a.length < 200) {
	// 	if(a.length%2 == 0) {
	// 		return a[a.length / 2 - 1];
	// 	} else {
	// 			return a[Math.floor(a.length / 2 )];
	// 	}
	// }
	
	//Check if length is even with modulo operator
	const isEven = a.length % 2 === 0;
	return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]

}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));