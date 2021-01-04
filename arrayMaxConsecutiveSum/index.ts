function arrayMaxConsecutiveSum(inputArray: number[], k: number):number {
	let sums = []
	let maxSum = 0
	let rest = inputArray.length / k
	console.log(rest)
	console.log(inputArray.length - rest)
	for(let i = 0; i < (inputArray.length - (inputArray.length % k)); i++) {
		let value = inputArray[i];
		console.log(value)
			console.log(inputArray[i])
			console.log(inputArray[i +1])
		sums.push(inputArray[i]+ inputArray[i +1])
	}
	console.log(sums)
	sums.forEach((sum) => {
		if(sum > maxSum) {
			maxSum = sum
		}
	})
	console.log(maxSum)
	return maxSum
}


function arrayMaxConsecutiveSum2(inputArray: number[], k: number):number {
	let sum = 0;
	let max = 0
	for(let i = 0; i < k ; i++) {
		
		sum += inputArray[i]
		console.log(sum)
	}
	max = sum
	for(let i = k; i < inputArray.length; i++) {
		sum -= inputArray[i-k];
		console.log(sum)
		sum += inputArray[i]
			console.log(sum)
			if(sum > max) {
				max = sum
			}
	}

	return max
}
let a = [2, 3, 5, 1, 6,11,12] 
let k = 2
console.log(arrayMaxConsecutiveSum(a, k))
console.log(arrayMaxConsecutiveSum2(a, k))