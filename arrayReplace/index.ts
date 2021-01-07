function arrayReplace(items: number[], elemToReplace: number, substitutionElem: number) {
	let outputArray: number[] = []
	for(let i = 0; i < items.length; i++) {
		items[i] === elemToReplace ?
			outputArray.push(substitutionElem)
		: outputArray.push(items[i])
	}

	return outputArray
}

function arrayReplace2(items: number[], elemToReplace: number, substitutionElem: number) {

	items.forEach((el, index) => {
		if(el === elemToReplace) {items[index] = substitutionElem}
	})
	return items
}
const input = [1, 2, 1]; const el = 1; const subs = 3;
console.log(arrayReplace2(input, el, subs))