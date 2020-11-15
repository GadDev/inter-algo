function addNum(param1: number, param2: number): number {
	return param1 + param2
}

function addNum2(...param1: number[]): number {
	let iterableArray = Array(...arguments);
	let n = iterableArray.reduce((acc, item) =>  acc += item);
	console.log(n);
	return n

	// OR
	// let total = 0;
	// param1.forEach(num => total += num);
	// return total

}
console.log(addNum(1, 2));
console.log(addNum(3, 2));

console.log(addNum2(1,2,3,4,5));
console.log(addNum2(2,3));