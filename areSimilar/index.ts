function areSimilar(a: number[], b: number[]): boolean {
	let isSimilar = true
	if(a.length === b.length) {
		for(let i = 0; i < a.length; i++) {
			if(a[i] !== b[i]) {
				return isSimilar = false
			}

		}

	}
	return isSimilar
}

function areSimilar2(a: number[], b: number[]): boolean {
	const c: number[] = [];
	let d: number[] = []
	if(a.toString() === b.toString()) {
		return true
	}
	for(let i = 0; i < a.length; i++) {
		if(a[i] !== b[i]) {
			c.push(a[i]);
			d.push(b[i])
		}
	}
	d = d.reverse()
if(c.length === 2 && (c.toString() === d.toString())) {
	return true
}
	return false

}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 2];
const array4 = [2, 1, 1];
console.log(areSimilar(array1, array2))
console.log(areSimilar(array3, array4))