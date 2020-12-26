function almostIncreasingSequence(sequence: number[]): boolean {
	let nbrErr = 0;
  for ( let i = 1; i < sequence.length; i++) {
		if(sequence[i] < sequence[i - 1]) {
			nbrErr++
		}
	}

	return nbrErr <= 1
}

console.log(almostIncreasingSequence([1, 3, 2, 1, 9, 5])) 
console.log(almostIncreasingSequence([1, 3, 2])) 