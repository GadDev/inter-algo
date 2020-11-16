function addTwoDigits(n: any): number {
	const nToString = n.toString();
	let total = 0;
	for( let i = 0; i < nToString.length; i++) {
		total += parseInt(nToString[i])
	}
	return total

	//or
	// const nToStringSplit = n.toString().split('');
	// return nToStringSplit.reduce((a: string, b: string) => {
	// 	return parseInt(a) + parseInt(b)
	// })
}

console.log(addTwoDigits(2956));