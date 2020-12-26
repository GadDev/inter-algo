function alphabeticShift(inputString: string): string {
	const alphabet: string[] =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const stringSplited: string[] = inputString.split('')
	let newString: string[] = [];
	stringSplited.forEach((character: string) => {
		let indexCharacter: number = alphabet.indexOf(character)
		
		
		if(indexCharacter === 25) {
			newString.push(alphabet[0])
		} else {
			newString.push(alphabet[indexCharacter + 1])
		}
	})

	return newString.join('')
}

alphabeticShift('crazy');
console.log(alphabeticShift('bonjour'))
// alphabeticShift('bye');