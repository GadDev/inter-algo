function alphabetSubSequence(sequence: string): boolean {
	let sequenceSplited: string[] = sequence.split('')
	let isSubSequenceInput: boolean = true;
	console.log(sequenceSplited);
	for(let i = 0; i < sequenceSplited.length; i++) {
		if(i >= 1) {
			if( sequenceSplited[i].charCodeAt(0) < sequenceSplited[i - 1].charCodeAt(0)) {
				isSubSequenceInput = false
			}
		}
		
		console.log(sequenceSplited[i].charCodeAt(0))
	}
	return isSubSequenceInput
}

function alphabetSubSequence2(sequence: string): boolean {
	const chars: string[] = sequence.split('')
	const charValues: number[] = [];
	
	chars.forEach((char: string) =>{
		charValues.push(char.charCodeAt(0))
	})
	//check if there is any duplicate character
	if(new Set(charValues).size !== charValues.length) {
		return false
	}

	for(let i = 0; i < charValues.length; i++){
		if(charValues[i] >= charValues[i + 1]) {
			return false
		}
	}
	return true
}

console.log(alphabetSubSequence('asdfghj'))
console.log(alphabetSubSequence('adkwz'))
console.log(alphabetSubSequence('abcmpz'))